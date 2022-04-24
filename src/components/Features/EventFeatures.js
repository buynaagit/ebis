import React from "react";
import { getLocale } from "../../locales";
import EventFeaturesItem from "./EventFeaturesItem";

const EventFeatures = () => {
  return (
    <section className="event_features_area">
      <div className="container">
        <div className="hosting_title security_title text-center">
          <h2 className="wow fadeInUp" data-wow-delay="0.2s">
            Сэргээн засахын үндсэн тусламж үйлчилгээ
          </h2>
        </div>
        <div className="row event_features_inner">
          <EventFeaturesItem
            url=""
            image="leader.png"
            title={getLocale("zorilgo")}
            ptext="Урт хугацааны сэргээн засах эмчилгээ шаардлагатай аливаа   өвчин   эмгэг,   гэмтлийн болон насжилтын шалтгаант бие махбодын хөдөлгөөн, үйл ажиллагаа, чадвар алдагдлыг сэргээн тогтворжуулах, чадвар алдагдлаас  урьдчилан сэргийлэх, амьдралын чанарыг дээшлүүлэхэд чиглэсэн өдрийн сэргээн засах тусламж үйлчилгээг багаар үзүүлэх, сургалт, зөвлөгө өгөх ажлуудыг зохион байгуулах."
            btn="Дэлгэрэнгүй"
          />
          <EventFeaturesItem
            url=""
            image="meetup.png"
            title={getLocale("zorilt")}
            ulist="Эрэлт хэрэгцээ бүхий зорилтот хүн амд үйлчлүүлэгч төвтэй, үр дүнтэй, үйлчлүүлэгч бүрийн хувь хүний онцлогт тохирсон, сэргээн засах тусламж үйлчилгээг мэргэжлийн өндөр түвшинд үзүүлэх үндсэн зарчимыг баримтлана|Орчин үеийн сэргээн засах тоног төхөөрөмжүүд, оношилгооны болон чийрэгжүүлэх багаж төхөөрөмжүүдийг суурилуулж, чанартай тусламж үзүүлнэ|Үйлчлүүлэгчид ээлтэй, тав тухыг хангасан орчин бүрдүүлж, үйлчилгээний өрөө тасалгаа, амралтын өрөөг тохижуулах, сургалт зөвлөгөөнд зориулсан сургалтын танхим бүхий бусад үйлчилгээний цогц байгууламжтай байна|Гадаад дотоодын байгууллагуудтай хамтран ажиллаж, сургалт зөвлөгөөн, төсөл хөтөлбөрүүдийг зохион байгуулан ажиллана."
            btn="Дэлгэрэнгүй"
          />
          <EventFeaturesItem
            url=""
            image="chat.png"
            title={getLocale("clinic_detail")}
            ulist="Сэргээн засахын оношилгоо, эмчилгээ|Хөдөлгөөн засал|Физик эмчилгээ|Хөдөлмөр засал|Сэргээн засах эмчилгээний бариа засал /Япон уламжлалт бариа засал/|	Настны сэргээн засах үйлчилгээ|	Эрүүл мэндийн сургалт сурталчилгаа|	Үйлчлүүлэгч болон тэдний гэр бүлд зориулсан эрүүл мэндийн талаарх сургалт, зөвлөгөө|Сэтгэл засал (тайвшруулах дасгал, хөгжим эмчилгээ, бясалгал гэх мэт)"
            btn="Дэлгэрэнгүй"
          />
        </div>
      </div>
    </section>
  );
};
export default EventFeatures;
