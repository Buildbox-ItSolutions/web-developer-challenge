import { styles } from "../styles";

function Avatar({item}:any):JSX.Element {
  return <img src={`img/user${item.userId}.png`} 
          style={styles.avatar} alt="img" title={item.sent} />;
}

export default Avatar;