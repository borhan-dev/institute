import gdImg from './assets/gd.jpg';
import wd from './assets/wd.jpg';
import ms from './assets/ms.jpg';
import dm from './assets/dm.jpg';
import am from './assets/am.jpg';
const data: ICourseData[] = [
  {
    title: 'স্ক্র্যাচ থেকে প্রফেশনাল ওয়েবসাইট সাজাতে শিখুন',
    name: 'ওয়েব ডিজাইন',
    imgUrl: wd,
    overview:
      'বিশ্বব্যাপী প্রতি মুহূর্তে তৈরি হচ্ছে হাজার হাজার ওয়েবসাইট। শখের কাজ কিংবা পরিপূর্ণ ব্যবসা সব ধরণের কাজের পরিচয় বহন করে ওয়েবসাইট। এজন্যই ডিজিটাল প্ল্যাটফর্মে ক্যারিয়ার হিসেবে ওয়েব ডিজাইনারের বেশ চাহিদা রয়েছে। তাই আপনি যদি ওয়েব ডিজাইনার হিসেবে ক্যারিয়ার গড়তে চান, তাহলে আপনার জন্যই আমাদের ওয়েব ডিজাইন কোর্স ।',
    courseDuration: '6 month',
    tag: ['সকল কোর্স', 'ওয়েব এন্ড সফটওয়্যার'],
    courseContent: {
      lecture: '48',
      project: '15'
    }
  },
  {
    title: 'একের ভেতর তিন!',
    name: 'মার্ন স্ট্যাক ডেভেলপমেন্ট',
    imgUrl: ms,
    overview:
      'মার্ন স্ট্যাক ডেভলপমেন্ট হল এমন একটি বিষয় যেখানে ওয়েব ডিজাইন, ওয়েব ডেভেলপমেন্ট ও অ্যাপ ডেভেলপমেন্ট তিনটি বিষয়ে একসাথে দক্ষতা অর্জন করা যায়। বর্তমানে মার্ন স্ট্যাক ডেভলপার -এর চাহিদা মার্কেট প্লেস ও দেশীয় কোম্পানিতে অনেক বেশি। তাই দক্ষতা গড়ে তুলতে এনরোল করুন মার্ন স্ট্যাক ডেভলপমেন্ট কোর্সটিতে।',
    courseDuration: '12 month',
    tag: ['সকল কোর্স', 'ওয়েব এন্ড সফটওয়্যার'],
    courseContent: {
      lecture: '96',
      project: '20 +'
    }
  },
  {
    title: 'অনলাইন প্ল্যাটফর্মে ক্যারিয়ার গড়তে শিখুন',
    name: 'ডিজিটাল মার্কেটিং',
    imgUrl: dm,
    overview:
      'টেক নির্ভর/ প্রযুক্তি নির্ভর বিশ্বের ট্রেন্ডিং টপিক এখন ডিজিটাল মার্কেটিং। নিত্য প্রয়োজনীয় পণ্য থেকে শুরু করে গাড়ি-বাড়ি পর্যন্ত, যেকোনো কিছু কিনতে বেশিরভাগ মানুষ এখন ইন্টারনেটের দ্বারস্থ হয়। গুগলের তথ্যমতে, প্রায় ৮৭ শতাংশ মানুষ যেকোনো কিছু কেনার আগে আমাজন বা গুগলে সার্চ করে। তাই ব্যবসায় সাফল্য আনতে বা অনলাইন মার্কেটিং শিখতে এনরোল করুন ডিজিটাল মার্কেটিং কোর্সে।',
    courseDuration: '6 month',
    tag: ['সকল কোর্স', 'ডিজিটাল মার্কেটিং'],
    courseContent: {
      lecture: '48',
      project: '18 +'
    }
  },
  {
    title: 'প্যাসিভ ইনকামের উপায় খুঁজছেন?',
    name: 'এফিলিয়েট মার্কেটিং',
    imgUrl: am,
    overview:
      'প্যাসিভ ইনকামের জনপ্রিয় উৎস এখন এফিলিয়েট মার্কেটিং। গুগলের জরিপ থেকে দেখা যায়, বিশ্বজুড়ে প্রায় ৯ শতাংশ অ্যাফিলিয়েট মার্কেটার মাসে প্রায় ৫০,০০০ ডলারের বেশি আয় করছেন। তাই মাল্টি বিলিয়ন ডলার এই ইন্ডাস্ট্রিতে ক্যারিয়ার গড়তে এখনই এনরোল করুন অ্যাফিলিয়েট মার্কেটিং কোর্স এ।',
    courseDuration: '3 month',
    tag: ['সকল কোর্স', 'ডিজিটাল মার্কেটিং'],
    courseContent: {
      lecture: '28',
      project: '8 +'
    }
  },
  {
    title: 'ডিজাইন আর রঙের খেলায় ক্যারিয়ার গড়তে',
    name: 'প্রফেশনাল গ্রাফিক ডিজাইন',
    imgUrl: gdImg,
    overview:
      'ভিজ্যুয়াল কনটেন্টের চাহিদা বেড়ে যাওয়ায় এখন মার্কেটাররা গ্রাফিক্যাল কনটেন্টের দিকে ঝুঁকেছেন। তাই বিশ্বজুড়ে গ্রাফিক ডিজাইনারদের চাহিদা এখন আকাশচুম্বী। এক জরিপে দেখা যায়, ভালো একটা লোগোর জন্য একটি ছোট প্রতিষ্ঠানও ৫০০ ডলার পর্যন্ত খরচ করে। আপনি কি ডিজাইনের কাজ করতে ভালোবাসেন? তাহলে আপডেটেড মডিউলে দক্ষ প্রশিক্ষকের সাথে আমাদের গ্রাফিক ডিজাইন কোর্সটি আপনার জন্যই।',
    courseDuration: '6 month',
    tag: ['সকল কোর্স', 'ডিজাইন এন্ড মাল্টিমিডিয়া'],
    courseContent: {
      lecture: '48',
      project: '30 +'
    }
  }
];

export default data;
