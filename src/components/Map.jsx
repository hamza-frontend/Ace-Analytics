import React from "react";

const Map = () => {
  return (
    <div className="p-6 rounded-lg">
      <iframe
        title="Our Location"
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d103406.28956373883!2d74.23105975682283!3d35.91156835171163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sMain%20Naveed%20Shaheed%20Rd%2C%20Near%20MP%20Checkpost%2C%20Sonikote%2C%20Gilgit%2C%20Gilgit%20Baltistan%2C%20Pakistan!5e0!3m2!1sen!2s!4v1760350020211!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: "400px" }}
        allowFullScreen={true}
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
