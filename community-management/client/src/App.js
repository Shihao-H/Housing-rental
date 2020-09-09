import React from 'react';
import './App.scss';
import Header from "./header/Header";
import Wrapper from "./interactions/Wrapper";
import Footer from "./Footer";




class App extends React.Component {
    render() {

        return (
            <>
                <Wrapper/>
                <nav>
                    <Header/>
                </nav>
                <div className="last-content">
                    <main>
                        {this.props.children}
                    </main>
                </div>
                {/*<div>*/}
                    {/*<Footer className="footer"/>*/}
                {/*</div>*/}
            </>
        );
    }
}


export default App;
