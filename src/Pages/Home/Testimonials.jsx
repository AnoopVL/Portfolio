import data from "../../data/index.json";
import "./Testimonials.css";

export default function Testimonial() {
  return (
    <section className="testimonial--section" id="testimonial">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h1 className="sections--heading">Experience</h1>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.testimonial?.map((item, index) => (
          <div key={index} className="testimonial--section--card">
            <p className="text-md">{item.description}</p>
            <div className="testimonial--section--card--author--detail">
              <img
                src={item.src}
                alt="Avatar"
                style={{ borderRadius: "50%" }}
                height={75}
                width={75}
              />
              <div>
                <p className="text-md testimonial--author--name">
                  {item.compName}
                </p>
                <p className="text-md testimonial--author--designation">
                  {item.designation}
                </p>
                <p className="text-md testimonial--duration">{item.duration}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
