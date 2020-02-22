const initialState = {
  data: {
    user: [
      { id: 0, name: '' }
    ],
    slim: [
      { id: 0, name: 'Tu', age: '65', path: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Vladimir_Putin_meeting_Prayut_Chan-o-cha_%282016-05-19%29-02_cropped1.jpg/200px-Vladimir_Putin_meeting_Prayut_Chan-o-cha_%282016-05-19%29-02_cropped1.jpg' },
      { id: 1, name: 'Pareena', age: '43', path: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/%E0%B8%9B%E0%B8%B2%E0%B8%A3%E0%B8%B5%E0%B8%93%E0%B8%B2_%E0%B9%84%E0%B8%81%E0%B8%A3%E0%B8%84%E0%B8%B8%E0%B8%9B%E0%B8%95%E0%B9%8C_2020.jpg/200px-%E0%B8%9B%E0%B8%B2%E0%B8%A3%E0%B8%B5%E0%B8%93%E0%B8%B2_%E0%B9%84%E0%B8%81%E0%B8%A3%E0%B8%84%E0%B8%B8%E0%B8%9B%E0%B8%95%E0%B9%8C_2020.jpg' },
      { id: 2, name: 'Pravit', age: '74', path: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Prawit_Wongsuwan_%282018%29_cropped.jpg/200px-Prawit_Wongsuwan_%282018%29_cropped.jpg' },
      { id: 3, name: 'Mongkolkit', age: '38', path: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/%E0%B8%A1%E0%B8%87%E0%B8%84%E0%B8%A5%E0%B8%81%E0%B8%B4%E0%B8%95%E0%B8%95%E0%B8%B4%E0%B9%8C_%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%98%E0%B8%B2%E0%B8%A3%E0%B8%B2%E0%B8%99%E0%B8%99%E0%B8%97%E0%B9%8C.jpg/200px-%E0%B8%A1%E0%B8%87%E0%B8%84%E0%B8%A5%E0%B8%81%E0%B8%B4%E0%B8%95%E0%B8%95%E0%B8%B4%E0%B9%8C_%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%98%E0%B8%B2%E0%B8%A3%E0%B8%B2%E0%B8%99%E0%B8%99%E0%B8%97%E0%B9%8C.jpg' }
    ],
    msg: [
      { id: 0, msg: ['หวัดดี(เสียงใหญ่)!!','ปัดโธ่!','เดี๋ยวทุ่มด้วยโพเดี้ยม..ซะเลย..ไอ่นี่','เข้าใจตรงกันนะ','อะไร..อะไร!!','ฟังกันบ้างไหมเนี่ย!!'] },
      { id: 1, msg: ['สวัสดีค่ะ','ดิชั้น นางสาว ปารีณา โรมานอฟ <3','อิช่อ!!','กุไม่คุยกับมึงง!!','ไปไหนก็ไป Eดอก','เหม็นสาบจริงๆ'] },
      { id: 2, msg: ['หวักลี','ว่าไงนะไม่ได้ยิน!!','นาฬิการึ','พวกนี้ยืมเพื่อนมา','เพื่อนตายหมดแล้ว!','ป๊าบ(เสียงตบหัว)'] },
      { id: 3, msg: ['สวัสดีครับ','พี่ไม่ค่อยใช้ลูกน้องนะ เพราะลูกน้องมันโหดไม่เท่าพี่','สมัยเรียนนี่ชกต่อยทุกวัน ต่อยเป็นอาชีพ ชนะห้องนี้เสร็จก็ไปชนะห้องอื่นต่อ','ตอนมีเรื่องฝั่งพี่ไปประมาณ 30 ฝั่งนู้นประมาณ 60 พี่เป็นคนเปิดทั้งหมด','ปกติเวลามีเรื่อง เค้าจะต้องมาหาพี่ก่อน เพราะพี่รู้จักทุกซุ้ม!!','เมื่อก่อนต่อยนักมวยแล้วนักมวยแพ้ พี่ไม่ฆ่ามันก็ดีแล้ว'] }
    ]
  }
}
const reducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case 'ADD_USER':
      const pushName = action.payload;
      console.log(pushName);
      newState.data.msg.push(pushName);
      return newState;
    default:
      break;
  }
  return state;
}
export default reducer;