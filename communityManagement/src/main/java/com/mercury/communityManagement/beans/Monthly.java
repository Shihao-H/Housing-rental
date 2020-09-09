package com.mercury.communityManagement.beans;

import java.sql.Date;

public class Monthly {

    private String memo;

    private int type;

    private Date date;

    private int amount;

    public Monthly() {
    }

    public Monthly(String memo, int type, Date date, int amount) {
        this.memo = memo;
        this.type = type;
        this.date = date;
        this.amount = amount;
    }

    public String getMemo() {
        return memo;
    }

    public void setMemo(String memo) {
        this.memo = memo;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    @Override
    public String toString() {
        return "Monthly{" +
                "memo='" + memo + '\'' +
                ", type=" + type +
                ", date=" + date +
                ", amount=" + amount +
                '}';
    }
}
