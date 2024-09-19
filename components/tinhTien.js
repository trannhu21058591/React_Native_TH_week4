import { StyleSheet, Text, View, Image, TouchableOpacity, Button, Linking} from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const [count, setCount] = useState(1);
  const [money, setMoney] = useState(141800);
  const ttien = 141800;
  const formattedNumber = money.toLocaleString('vi-VN');
  const fm_Tien = ttien.toLocaleString('vi-VN');

  const tang = () => {
    setCount(count + 1);
    setMoney(ttien + money);
  }

  const giam = () => {
    if(count>1){
      setCount(count - 1);
      setMoney(money - ttien);
    }
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.info}>

        <View style={styles.tt}>
          <Image style={styles.img} source={{uri:'https://sachhoc.com/image/catalog/LuyenThi/Lop10-12/Giai-nhanh-nguyen-ham-tich-phan-ung-dung-may-tinh-casio.jpg'}}/>
          <View style ={styles.text}>
            <View style={styles.text}>
              <Text style={styles.txt}>Nguyên hàm tích phân và ứng dụng</Text>
              <Text style={styles.txt}>Cung cấp bởi Tiki Trading</Text>
              <Text style={styles.txt_tien}>{fm_Tien} đ</Text>
              <Text style={{textDecorationLine:'line-through', color: 'gray'}}>141.000 đ</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row', marginBottom:-15}}>
              <View style={styles.add_SL}>
                <TouchableOpacity onPress={giam}>
                 <Image style={styles.icon} source={{uri:'https://img.icons8.com/?size=100&id=IVYwM4I9NfPa&format=png&color=000000'}}/>
                </TouchableOpacity >
                <Text  style={{fontSize: 17, fontWeight:'700'}}>{count}</Text>
                <TouchableOpacity onPress={tang}>
                 <Image style={styles.icon} source={{uri:'https://img.icons8.com/?size=100&id=eWY7UdWe7VuB&format=png&color=000000'}}/>
                </TouchableOpacity>
                
              </View>
              <View style={{flex:2,justifyContent:'center', alignItems: 'flex-end'}}>
                <TouchableOpacity><Text style={styles.txt_blue}>Mua sau</Text></TouchableOpacity>
              </View>         
            </View>
          </View>
        </View>

        <View style={styles.coupon}>
          <View style={styles.MGG_Txt}>
            <Text style={{fontWeight: 'bold'}}>Mã giảm giá đã lưu</Text>
            <TouchableOpacity><Text style={styles.txt_blue}>Xem tại đây</Text></TouchableOpacity>
            
          </View>

          <View style={{flex:1, flexDirection: 'row', marginBottom: 30, height: 45}}>
            <View style={styles.box}>
              <View style ={{backgroundColor:'yellow', height:20, width: 50, marginLeft: 10, marginRight: 10}}>
                
              </View>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>Mã giảm giá</Text>
            </View>
            <TouchableOpacity style={styles.apDung}>
              <View>
                <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold'}}>Áp dụng</Text>
              </View>
            </TouchableOpacity>
            
          </View>

        </View>

      </View>
      <View style={styles.Tam}>
        <View style={styles.phieuGG}>
          <View style={styles.box1}>
            <Text style={{fontWeight: 'bold'}}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
            <TouchableOpacity><Text style={styles.txt_blue}>Nhập tại đây?</Text></TouchableOpacity>
          </View>
        </View>
        <View style={styles.TamTinh}>
        <View style={styles.box2}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Tạm tính</Text>
            <Text style={styles.txt_tien}>{formattedNumber} đ</Text>
          </View>
        </View>
      </View>
      <View style={styles.total}>
        <View style={styles.thanhTien}>
          <View style={styles.ThanhTien_f}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color:'gray'}}>Thành tiền</Text>
            <Text style={styles.txt_tien}>{formattedNumber} đ</Text>
          </View>
          <View style={styles.tienHanhDat}>
            <TouchableOpacity style={styles.box3}>
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.txt_TT}>Tiến hàng đặt hàng</Text> 
              </View>
              
            </TouchableOpacity>      
          </View>

        </View>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  },

  box3:{
    width: '95%',
    height: 45,
    backgroundColor: '#E53935',
  },
  txt_TT:{
    fontSize: 20,
    fontWeight:'bold',
    color: 'white',
  },

  tienHanhDat:{
    flex: 1,
    alignItems:'center'
  
  },
  ThanhTien_f:{
    flex: 1,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 15,
  },

  thanhTien:{
    backgroundColor:'white',
    height: 120,


  },

  info: {
    flex: 2,
    backgroundColor: 'white',
    //marginBottom: 30, 
    marginLeft: 15,
    marginRight: 15,
  },
  tt: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,

  },
  img: {
    width: 140,
  },

  text: {
    flex: 3,
    marginLeft: 10,
    justifyContent: 'space-between'

  },
  
  txt: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  txt_tien:{
    color: 'red',
    fontSize: 20,
    fontWeight:'bold',
  },
  icon:{
    width:23,
    height:23,
  },

  add_SL: {
    flex: 1, 
    flexDirection: 'row',
    alignItems:'center', 
    justifyContent: 'space-around',
  },

  txt_blue:{
    color:'blue',
    marginLeft: 20,
    fontWeight: 'bold'
  },

  coupon:{
    flex: 1,
   // marginTop: 30,
  },

  MGG_Txt:{
    flex: 1,
    flexDirection: 'row',
 
  },
  box: {
    flex: 2, 
    flexDirection:'row', 
    alignItems: 'center', 
    backgroundColor: 'white', 
    borderWidth: 2, 
    borderRadius:5, 
    borderColor: 'gray',
    marginRight: 30,
    
  },
  apDung:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    borderRadius: 5,
  },

  Tam:{
    flex:1,
    marginTop: 10,
    backgroundColor: '#C4C4C4',
    justifyContent: 'space-around',
  },
  phieuGG:{
    backgroundColor:'white',
    height: 51,
  },
  TamTinh:{
    backgroundColor: 'white',
    height: 51,
  },
  box1: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    marginLeft: 15,
    marginRight: 15,
  },
  box2: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    marginLeft: 15,
    marginRight: 15,
  },

  total: {
    flex: 2,
    backgroundColor: '#C4C4C4',
    justifyContent:'flex-end'
  },


});
