import {Component} from "react";
import {GoogleApiWrapper, Map, Marker} from "google-maps-react";
import React from "react";
import './Locations.scss';
import FormLabel from "@material-ui/core/FormLabel/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import FormControl from "@material-ui/core/FormControl/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup/RadioGroup";
import Radio from "@material-ui/core/Radio/Radio";

class Locations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
        this.tRef = React.createRef();
        this.markers = [];
        this.results = [];
    }


    setMapOnAll = (map) => {
        for (let i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(map);
        }
    }

    // Removes the markers from the map, but keeps them in the array.
    clearMarkers = () => {
        this.setMapOnAll(null);
    }


    // Deletes all markers in the array by removing references to them.
    deleteMarkers = () => {
        this.clearMarkers();
        this.markers = [];
    }




    fetchPlaces = (value) => {


        // console.log(this.tRef.current);
        const {google} = this.tRef.current.props;

        let map = this.tRef.current.map;

        const bounds = new google.maps.LatLngBounds();
        const infoWindow = new google.maps.InfoWindow;
        let currentInfoWindow = infoWindow;
        const service = new google.maps.places.PlacesService(map);
        let infoPane = document.getElementById('panel');

        let request = {
            location: {
                lat: 40.33, lng: -74.57
            },
            rankBy: this.props.google.maps.places.RankBy.DISTANCE,

            // keyword: isNull ? 'hotel':this.state.keyword
            // keyword: this.state.keyword
            keyword: value
        };



           let temp = new Promise((resolve, reject) =>
            {
                console.log('This is the begining');

                    this.deleteMarkers();
                    this.results=[];
                    service.nearbySearch(request, (results, status) => {
                        if (status == google.maps.places.PlacesServiceStatus.OK) {

                            console.log(status);
                            results.forEach(place => {
                                let marker = new google.maps.Marker({
                                    position: place.geometry.location,
                                    map: map,
                                    title: place.name
                                });

                                this.markers.push(marker);
                                this.results.push(place);


                                // Adjust the map bounds to include the location of this marker
                                bounds.extend(place.geometry.location);
                            });


                            /* Once all the markers have been placed, adjust the bounds of the map to
                             * show all the markers within the visible area. */
                            map.fitBounds(bounds);
                            console.log('+++++++++++++++');
                            // this.setMarkers(markers);
                            console.log(this.results);
                            console.log(this.markers);
                            console.log('+++++++++++++++');

                        }
                        else {
                            console.log("doesn't work");
                        }


                    });


                    resolve('Finished');
            });






        const temp2 = () => {

            console.log('.....................');

                this.results.forEach((place, index) => {

                    console.log('@@@@@@@@@@@@@@');


                    let marker = this.markers[index];
                    google.maps.event.addListener(marker, 'click', () => {
                        let request = {
                            placeId: place.place_id,
                            fields: ['name', 'formatted_address', 'geometry', 'rating',
                                'website', 'photos']
                        };

                        /* Only fetch the details of a place when the user clicks on a marker.
                         * If we fetch the details for all place results as soon as we get
                         * the search response, we will hit API rate limits. */
                        service.getDetails(request, (placeResult, status) => {
                            if (status == google.maps.places.PlacesServiceStatus.OK) {
                                let placeInfowindow = new google.maps.InfoWindow();
                                let rating = "None";
                                if (placeResult.rating) rating = placeResult.rating;
                                placeInfowindow.setContent('<div><strong>' + placeResult.name +
                                    '</strong><br>' + 'Rating: ' + rating + '</div>');
                                placeInfowindow.open(marker.map, marker);
                                currentInfoWindow.close();
                                currentInfoWindow = placeInfowindow;
                                console.log("reach here");
                                // showPanel(placeResult);

                                if (infoPane.classList.contains("open")) {
                                    infoPane.classList.remove("open");
                                }

                                // Clear the previous details
                                while (infoPane.lastChild) {
                                    infoPane.removeChild(infoPane.lastChild);
                                }

                                /* TODO: Step 4E: Display a Place Photo with the Place Details */
                                // Add the primary photo, if there is one
                                if (placeResult.photos) {
                                    let firstPhoto = placeResult.photos[0];

                                    console.log(firstPhoto);


                                    let photo = document.createElement('img');
                                    photo.classList.add('hero');
                                    photo.src = firstPhoto.getUrl();
                                    photo.width = 300;
                                    photo.height = 150;
                                    infoPane.appendChild(photo);
                                }

                                // Add place details with text formatting
                                let name = document.createElement('h1');
                                name.classList.add('place');
                                name.textContent = placeResult.name;
                                infoPane.appendChild(name);

                                if (placeResult.rating) {
                                    let rating = document.createElement('p');
                                    rating.classList.add('details');
                                    rating.textContent = `Rating: ${placeResult.rating} \u272e`;
                                    infoPane.appendChild(rating);
                                }

                                let address = document.createElement('p');
                                address.classList.add('details');
                                address.textContent = placeResult.formatted_address;
                                infoPane.appendChild(address);
                                if (placeResult.website) {
                                    let websitePara = document.createElement('p');
                                    let websiteLink = document.createElement('a');
                                    let websiteUrl = document.createTextNode(placeResult.website);
                                    websiteLink.appendChild(websiteUrl);
                                    websiteLink.title = placeResult.website;
                                    websiteLink.href = placeResult.website;
                                    websitePara.appendChild(websiteLink);
                                    infoPane.appendChild(websitePara);
                                }

                                // Open the infoPane
                                infoPane.classList.add("open");


                            }
                            else {
                                console.log('showDetails failed: ' + status);
                            }


                            // showDetails(placeResult, marker, status)
                        })
                    })

                });


        }



        temp.then(
            (res) => {

                let myInterval = setInterval(() => {
                    if(this.results.length > 0)
                    {

                        setTimeout(() => {
                            console.log('clear interval...');
                            clearInterval(myInterval);
                            temp2();
                        }, 105);


                    }
                }, 100);

            }
        );


    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
        this.fetchPlaces(event.target.value);
    };


    showMap() {

        return (
            <>
                <Map
                    // style={{width: '30%', height: 600, position: 'relative'}}
                    style={{width: '53%', height: 500, display:'flex', flexFlow: 'row nowrap'}}
                    ref = {this.tRef}
                    google={this.props.google}
                    // onReady={(mapProps,map) => this.fetchPlaces(mapProps, map)}

                    zoom={16}
                    initialCenter={{
                        lat: 40.33, lng: -74.57
                    }}
                    visible={true}
                >

                    <Marker
                        lat={40.33}
                        lng={-74.57}
                        name='Center'
                        color="blue"
                        icon={"http://maps.google.com/mapfiles/ms/icons/blue.png"}
                    />
                </Map>
            </>
        );
    }




    render() {
        return (
            <div>
                <br/>
                <br/>
                <br/>
                <div className="content">
                    <div className="useless"/>
                    <div className="left">
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Places nearby</FormLabel>
                            <RadioGroup aria-label="filters" name="gender1" value={this.state.value} onChange={this.handleChange}>
                                <FormControlLabel value="airport" control={<Radio />} label="Airport" />
                                <FormControlLabel value="bus station" control={<Radio />} label="Bus Station" />
                                <FormControlLabel value="cafe" control={<Radio />} label="Cafe" />
                                <FormControlLabel value="convenience store" control={<Radio />} label="Convenience Store" />
                                <FormControlLabel value="department store" control={<Radio />} label="Department Store" />
                                <FormControlLabel value="gas station" control={<Radio />} label="Gas Station" />
                                <FormControlLabel value="gym" control={<Radio />} label="Gym" />
                                <FormControlLabel value="hardware store" control={<Radio />} label="Hardware Store" />
                                <FormControlLabel value="laundry" control={<Radio />} label="Laundry" />
                                <FormControlLabel value="movie theater" control={<Radio />} label="Movie Theater" />
                                <FormControlLabel value="park" control={<Radio />} label="Park" />
                                <FormControlLabel value="restaurant" control={<Radio />} label="Restaurant" />
                                <FormControlLabel value="school" control={<Radio />} label="School" />
                                <FormControlLabel value="hotel" control={<Radio />} label="Hotel" />
                                <FormControlLabel value="supermarket" control={<Radio />} label="Supermarket" />
                                <FormControlLabel value="transit station" control={<Radio />} label="Transit Station" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div className="left1"></div>
                    <div className="middle">
                        {this.showMap()}
                    </div>
                    <div className="middleUseless"/>
                    <div id="panel" className="right"/>
                    <div className="rightUseless"/>
                </div>
            </div>
        );
    }
}


export default GoogleApiWrapper({
    apiKey: ("AIzaSyCD_NjwMKIxeMBW5-KhgH2cntfYZdTc2A0")
})(Locations)

