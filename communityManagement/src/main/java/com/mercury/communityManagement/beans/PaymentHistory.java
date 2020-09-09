package com.mercury.communityManagement.beans;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "PAYMENT_HISTORY")
public class PaymentHistory {

    @Id
    @SequenceGenerator(name = "ph_seq_gen", sequenceName = "PH_SEQ", allocationSize = 1)
    @GeneratedValue(generator="ph_seq_gen", strategy = GenerationType.AUTO)
    private int id;

    @Column
    private String memo;

    @Column
    private int amount;

    @Column
    private Date date;

    @Column
    private String status;

    @Column
    public int uid;

    public PaymentHistory() {
    }

    public PaymentHistory(String memo, int amount, Date date, String status, int uid) {
        this.memo = memo;
        this.amount = amount;
        this.date = date;
        this.status = status;
        this.uid = uid;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getMemo() {
        return memo;
    }

    public void setMemo(String memo) {
        this.memo = memo;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getUid() {
        return uid;
    }

    public void setUid(int uid) {
        this.uid = uid;
    }

    @Override
    public String toString() {
        return "PaymentHistory{" +
                "id=" + id +
                ", memo='" + memo + '\'' +
                ", amount=" + amount +
                ", date=" + date +
                ", status='" + status + '\'' +
                ", uid=" + uid +
                '}';
    }
}
