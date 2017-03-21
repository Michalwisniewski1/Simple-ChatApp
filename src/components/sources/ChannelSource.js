import Actions from '../actions'
import * as firebase from 'firebase';



let ChannelSource = {
  getChannels: {
    remote(state){
      return new Promise((resolve, reject)=>{
        firebase.database().ref('/channels').on('value', (dataSnapshot) => {
          var channels = dataSnapshot.val();
          resolve(channels);
      });
    });
    }
  }
}


export default ChannelSource;
