import React from "react";
import test from "../../Assets/Imgs/test.jpg";
import "./PostText.scss";

const PostText = () => {
  return (
    <div className="post-text lg:col-span-9 col-span-12 mb-10">
      <h1>كلمة وكيل الكلية للدراسات العليا</h1>
      <img src={test} className="img-post" />
      <p className="post-content">
        الحمد لله والصلاة والسلام على رسول الله ...يمثل البحث العلمي أسس التقدم
        والرقي لأي دولة حديثة بل ويعد ضرورة اساسية من مقومات الحياة في العصر
        الحديث..ومن هذا المنطلق فإن كلية الهندسة جامعة الأزهر تولي بالغ الاهتمام
        للدراسات العليا والبحث العلمي. وتتضمن جميع الأقسام العلمية بالكلية منح
        درجات الماجستير والدكتوراة بالإضافة إلى بعض الدبلومات التخصصية . وتهدف
        الكلية إلى الوصول إلى أبحاث علمية متميزة محليا وإقليميا وعالميا و قابلة
        للتطبيق وخدمة المجتمع في كافة المجالات والتخصصات. ومن أجل الارتقاء
        بالبحث العلمي فإن الجامعة و الكلية تحرص ضمن خطة الدولة على إيفاد البعثات
        العلمية إلى أرقى الجامعات العالمية للحصول على الخبرات والوقوف على أحدث
        ما توصل إليه البحث العلمي مما كان له أكبر الأثر في وجود قامات علمية
        بالكلية درست في مدارس علمية مختلفة ومتنوعة ونقلت خبراتها إلى الباحثين
        والطلاب. كما تقوم الكلية بالتعاون مع جهات حكومية وتطبيقية مختلفة وإقامة
        اتفاقيات من أجل تطبيق ما توصل إليه البحث العلمي في قطاعات خدمية عديدة .
        وتقوم الكلية بتطوير مستمر لمعاملها والحصول على منح المشاريع البحثية من
        مختلف جهات التمويل . نسعى دوما للتطوير والارتقاء بمستوى البحث العلمي
        سائلين الله أن يكلل جهود الجميع بكل توفيق ونجاح .
      </p>
    </div>
  );
};

export default PostText;
