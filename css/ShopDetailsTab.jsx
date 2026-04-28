import { useState } from "react";
import "/public/css/ShopDetailsTab.css";
import CustomerReviews from "../../src/components/shopDetails/Customerreviews";

const tabs = [
  { title: "Description", active: true },
  { title: "Customer Reviews", active: false },
];


export default function ShopDetailsTab({ product }) {
  const [currentTab, setCurrentTab] = useState(1);

  return (
    <section
      className="flat-spacing-17 pt_0"
      style={{ maxWidth: "100vw", overflow: "clip" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="widget-tabs style-has-border">
              <ul className="widget-menu-tab">
                {tabs.map((elm, i) => (
                  <li
                    key={i}
                    onClick={() => setCurrentTab(i + 1)}
                    className={`item-title ${currentTab == i + 1 ? "active" : ""
                      } `}
                  >
                    <span className="inner">{elm.title}</span>
                  </li>
                ))}
              </ul>
              <div className="widget-content-tab">
                <div
                  className={`widget-content-inner ${currentTab == 1 ? "active" : ""
                    } `}
                >
                  <div className="tf-page-privacy-policy" >
                    <p className="mb_30">
                      {product?.short_description || "No description available."}
                    </p>
                    <div className="tf-product-des-demo"
                      style={{
                        width: "100%",
                        maxWidth: "100%",
                        display: "block",
                        margin: "0",
                        padding: "0",
                      }}


                    >
                      <div className="right">
                        {/* <h3 className="fs-16 fw-5">Brand</h3> */}
                        <p className="mb_30">
                          Experience the perfect blend of comfort and streetwear style with the Crostyl
                          Oversized Tee. Made from 100% premium cotton, this heavyweight 240 GSM
                          fabric is designed to keep you cool, confident, and comfortable all day.
                          Each piece goes through a bio-wash and silicon wash process for a buttery-soft
                          finish and long-lasting shape — built to move with you and made to last.
                        </p>
                      </div>
                      <p style={{ marginTop: "20px" }}>
                        <b>Features:</b>
                        <ul>
                          <li>100% premium cotton (240 GSM)6; </li>
                          <li>Bio-wash + Silicon wash for smooth, durable texture</li>
                          <li>Oversized fit for relaxed streetwear comfort</li>
                          <li>Ribbed crew neck with reinforced stitching</li>
                          <li>Drop-shoulder silhouette</li>
                          <li>Unisex design — made for everyone</li>

                        </ul>
                      </p>
                      <p style={{ marginTop: "20px" }}>
                        <b> Fabric Care:</b> <br />
                        Machine wash cold | Do not bleach | Dry in shade | Iron inside out
                      </p>
                      <p>
                        <b>  Style Note:</b><br />
                        <p>Pair it with cargos, joggers, or denim for an effortless street look.</p>
                        Minimal design. Maximum vibe. Only from Crostyl.
                      </p>




                    </div>
                  </div>
                </div>
                <div
                  className={`widget-content-inner ${currentTab == 2 ? "active" : ""
                    } `}
                >
                  <CustomerReviews />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}