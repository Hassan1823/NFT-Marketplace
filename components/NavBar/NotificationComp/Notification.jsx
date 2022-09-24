import React from "react";
import Image from "next/image";

//Internal imports
import Style from "./Notification.module.css";
import images from "../../../img";

const Notification = () => {
  return (
    <div className={Style.notification}>
      <p>Notification</p>
      <div className={Style.notification_box}>
        <div className={Style.notification_box_img}>
          <Image
            src={images.user1}
            alt='Notification Images'
            width={50}
            height={50}
            className={Style.notification_box_img}
          />
        </div>
        <div className={Style.notification_box_info}>
          <h4>Mohsin Zaib</h4>
          <p>Measure action of your user...</p>
          <small>3 minutes</small>
        </div>
        <span className={Style.notification_box_new }></span>
      </div>
    </div>
  );
};

export default Notification;
