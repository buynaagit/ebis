import React, { Component } from "react";
import { getLocale } from "../locales";

class ScheduleTab extends Component {
  render() {
    return (
      <section className="event_schedule_area sec_pad" id="tuhuurumj">
        <div className="container">
          <div className="hosting_title security_title text-center">
            <h2>
              <span style={{ textTransform: "initial" }}>
                {getLocale("orthopedic_c")}
              </span>
              {getLocale("nav5")}
            </h2>
          </div>
          <div className="event_schedule_inner">
            <div className="tab-content event_tab_content">
              <div
                className="tab-pane fade show active"
                id="one"
                role="tabpanel"
                aria-labelledby="one-tab"
              >
                <div className="media">
                  <div className="media-left">
                    <img
                      style={{ width: "300px", height: "300px" }}
                      src={require("../img/home-event/physic_ther.JPG")}
                      alt=""
                    />
                  </div>
                  <div className="media-body">
                    <h3 className="h_head">
                      {getLocale("tuhuurumjuud_title")}
                    </h3>
                    <span>
                      by <a>Japan</a>
                    </span>
                    <p>{getLocale("tuhuurumjuud_detail")}</p>
                  </div>
                </div>
                <div className="media">
                  <div className="media-left">
                    <img
                      style={{ width: "300px", height: "300px" }}
                      src={require("../img/home-event/laser_ther.jpg")}
                      alt=""
                    />
                  </div>
                  <div className="media-body">
                    <h3 className="h_head">
                      Японы NISSIN IRYOKI загварын CARBON HEALTH LIGHT шарлагын
                      аппарат
                    </h3>
                    <span>
                      by <a>Japan</a>
                    </span>
                    <p>
                      Энэхүү аппарат нь нарны гэрлийн бүтэцтэй ойролцоо туяа
                      буюу хэт ягаан туяа, үзэгдэх туяа, ульравиолет улаан туяа
                      зэргийг тодорхой хэмжээгээр ялгаруулан, биеийн дархлаа
                      болон эрүүл мэндийг дэмжих, цусан хангамж сайжруулах, эд
                      эсийн нөхөн төлжилтийг дээшлүүлэх нөлөөг үзүүлдэг.
                    </p>
                  </div>
                </div>
                <div className="media">
                  <div className="media-left">
                    <img
                      style={{ width: "300px", height: "300px" }}
                      src={require("../img/home-event/sandal.jpg")}
                      alt=""
                    />
                  </div>
                  <div className="media-body">
                    <h3 className="h_head">
                      Япон улсын National загварын бүрэн автомат бүтэн биеийн
                      массажны сандал
                    </h3>
                    <span>
                      by <a>Japan</a>
                    </span>
                    <p>
                      Булчин суллах, бодисын солилцоог сайжруулах, цус,
                      тунгалагийн эргэлтийг эрчимжүүлэх замаар биеийн алжаал
                      ядаргааг тайлах, тайвшруулах, өвдөлтийг намдаах дотор
                      эрхтэнүүдийн үйл ажиллагааг сэргээх эмчилгээний үйлчилгээ
                      үзүүлнэ.
                    </p>
                  </div>
                </div>
                <div className="media">
                  <div className="media-left">
                    <img
                      style={{ width: "300px", height: "300px" }}
                      src={require("../img/home-event/massage_bed.jpg")}
                      alt=""
                    />
                  </div>
                  <div className="media-body">
                    <h3 className="h_head">
                      Японы Dainichi загварын AUTOHEALTHER халдаг, автомат
                      массажны ор
                    </h3>
                    <span>
                      by <a>Japan</a>
                    </span>
                    <p>
                      Бүтэн биеийн толгойноос хөл хүртэл зөөлөн массаж иллэг
                      хийнэ. Массаж болон дулааны горимыг өөрчлөх
                      тохируулгуудтай Дулаан массаж, иллэгний үйлдлээр бие
                      махбодийн бодисын солилцоо сайжирна, алжаал ядаргааг
                      тайлна.
                    </p>
                  </div>
                </div>
                <div className="media">
                  <div className="media-left">
                    <img
                      style={{ width: "300px", height: "300px" }}
                      src={require("../img/home-event/techtron.jpg")}
                      alt=""
                    />
                  </div>
                  <div className="media-body">
                    <h3 className="h_head">
                      TENS Нам гүйдлийн долгионоор эмчлэх Цахилгаан эмчилгээний
                      аппарат
                    </h3>
                    <span>
                      by <a>Japan</a>
                    </span>
                    <p>
                      Өвчтэй хэсэгт арьсны гадна талаас цахилгаан гүйдлийг
                      дамжуулж, мэдрэлийн эсүүдийг цочроосноор, өвдөлтийн
                      мэдрэмж дамжихыг зогсоож, өвдөлт намдаах үйлдэл үзүүлнэ.
                    </p>
                  </div>
                </div>
                <div className="media">
                  <div className="media-left">
                    <img
                      style={{ width: "300px", height: "300px" }}
                      src={require("../img/home-event/denkyo.jpg")}
                      alt=""
                    />
                  </div>
                  <div className="media-body">
                    <h3 className="h_head">
                      Японы Denkyo загварын вибратор массажны аппарат
                    </h3>
                    <span>
                      by <a>Japan</a>
                    </span>
                    <p>
                      Биеийн бүх хэсэгт ялангуяа чангарсан хүзүү, дал мөр,
                      нурууны хэсэгт вибратор буюу чичиргээт массажны
                      тусламжтайгаар булчингийн чангарлыг суллаж, хөшилтийг
                      арилгана. Удаан хугацаанд суудаг оффис ажилнуудад хуян
                      хөөрөх, хүзүү хөшиж өвдөх үед илүү тохиромжтой
                    </p>
                  </div>
                </div>
                <div className="media">
                  <div className="media-left">
                    <img
                      style={{ width: "300px", height: "300px" }}
                      src={require("../img/home-event/onpar.jpg")}
                      alt=""
                    />
                  </div>
                  <div className="media-body">
                    <h3 className="h_head">
                      ONPAR ДАРАЛТАТ УСАН МАССАЖ, ЖАКУЗАН АППАРАТ
                    </h3>
                    <span>
                      by <a>Japan</a>
                    </span>
                    <p>
                      Дөрвөн мөчний хөл, гарын цэгүүдэд усан болон даралтат
                      массаж хийж, цусны эргэлт сайжруулах, булчин мэдрэлийн үйл
                      ажиллагааг сэргээх, үе мөчний хөшилт ба булчингийн тонус
                      чангарлыг сулруулах, алжаал ядаргаа тайлах зэрэг цогц
                      үйлчилгээ үзүүлнэ.
                    </p>
                  </div>
                </div>
                <div className="media">
                  <div className="media-left">
                    <img
                      style={{ width: "300px", height: "300px" }}
                      src={require("../img/home-event/bulchin_ther.jpg")}
                      alt=""
                    />
                  </div>
                  <div className="media-body">
                    <h3 className="h_head">
                      Япон улсын Vital загварын Гар, хөлийн даралтат эмчилгээний
                      аппарат
                    </h3>
                    <span>
                      by <a>Japan</a>
                    </span>
                    <p>
                      Хөлийн улны цэгүүд болон шагай, шилбэ, өвдөг хүртэлх
                      булчинд массаж хийнэ, Гар болон Хөлийн булчингийн
                      хатингаршил, мэдрэл цусан хангамжийг сайжруулах
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default ScheduleTab;
