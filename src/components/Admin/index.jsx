import axios from "axios";
import React, { useState } from "react";
function Admin() {
  const [proUrl, setProUrl] = useState("");
  const [proname, setProName] = useState("");
  const [prodes, setProDes] = useState("");
  const [proprice, setProprice] = useState("");
  const [proCategory, setProCategory] = useState("");
  function setProduct() {
    let newData = {
      url: proUrl,
      name: proname,
      des: prodes,
      price: proprice,
      category: proCategory,
    };
    axios.post(
      `https://api-crud.elcho.dev/api/v1/45012-27288-7bc68/books`,
      newData
    );
  }
  console.log(prodes);
  console.log(proname);
  console.log(prodes);

  return (
    <div id="admin">
      <div className="container">
        <div className="admin">
          <input
            type="text"
            placeholder="Upload photo"
            onChange={(e) => setProUrl(e.target.value)}
          />
          <div className="admin--block">
            <input
              type="text"
              placeholder="Product Name"
              onChange={(e) => setProName(e.target.value)}
            />
            <div className="admin--block__search">
             <select onChange={(e) => setProCategory(e.target.value)}>
             <option value="">Category</option>
              <option value="Детектив">Детектив</option>
              <option value="Фантастика">Фантастика</option>
              <option value="Приключения">Приключения</option>
              <option value="Научная">Научная</option>
             </select>
              <input
                type="text"
                placeholder="Price"
                onChange={(e) => setProprice(e.target.value)}
              />
            </div>
            <textarea
              placeholder="Product description..."
              style={{
                width: "242px",
                padding: "10px",
                fontSize: "14px",
                outline: "none",
                borderRadius: "5px",
                border: " 1.4px solid #010049",
              }}
              onInput={(e) => {
                e.target.style.height = "auto";
                e.target.style.height = e.target.scrollHeight + "px";
              }}
              onChange={(e) => setProDes(e.target.value)}
            />
          </div>
        </div>
      </div>
      <center>
        <button onClick={() => setProduct()}>save</button>
      </center>
    </div>
  );
}
export default Admin;
