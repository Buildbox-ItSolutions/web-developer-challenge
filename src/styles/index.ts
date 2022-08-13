import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  background-color: #343434;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  font-family: 'Segoe UI', 'Roboto', 'Oxygen', 'Fira Sans', 'Helvetica Neue', sans-serif;
`;

export const Feed = styled.div`
  width: 400px;
  max-width: 90%;
  margin-bottom: -5px;
  margin-top: 40px;
  text-align: left ;
  color: #9F9F9F90;
  font-size: 11px;
`;

export const View = styled.div`
  background-color: #313131;
  border-style: solid;
  border-color: #49494950;
  border-width: 1px;
  width: 380px;
  max-width: 90%;
  padding: 15px;
  padding-top: 40px;
  padding-bottom: 20px;
  margin-top: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ViewForm = styled.div`
  background-color: #313131;
  border-style: solid;
  border-color: #49494950;
  border-width: 1px;
  width: 380px;
  max-width: 90%;
  padding: 15px;
  padding-top: 15px;
  padding-bottom: 20px;
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
`;

export const PostText = styled.div`
  padding: 2px;
  text-align: left;
  color: #9F9F9F;
  font-size: 13px;
`;

export const PostContent = styled.div`
  width: 70%;
`;

export const PostSend = styled.div`
  padding: 2px;
  text-align: left;
  color: #9F9F9F60;
  font-size: 10px;
  margin-top: 14px;
  margin-bottom: -6px;
`;

export const PostSendUser = styled.div`
  padding: 2px;
  text-align: left;
  color: #9F9F9F90;
  font-size: 12px;
`;

export const UploadBtn = styled.div`
  border-style: solid;
  border-color: #494949;
  border-width: 1px;
  border-radius: 30px;
  width: 30px;
  height: 30px;
  padding: 20px;
  align-self: center;
  margin-right: 30px;
`;

export const UploadView = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`;

export const styles = {
  delete: {
    alignSelf: 'flex-start', 
    marginRight:-8, 
    marginTop:-40,
    cursor: 'pointer',
  },
  avatar: {
    borderRadius:28,
    marginLeft:10, 
    marginRight:30, 
    width: 70,
    alignSelf:'flex-start',
  },
  submit:{
    backgroundColor:'#6f6f6f',
    padding: 10,
    borderWidth: 0,
    borderRadius: 5,
    fontSize: 12,
    color: '#313131',
  },
  cancel:{
    backgroundColor:'transparent',
    padding: 10,
    borderWidth: 0,
    textDecoration: 'underline',
    fontSize: 10,
    color: '#6f6f6f',
    marginRight: 10,
  },
  input:{
    backgroundColor:'#6f6f6f80',
    padding: 10,
    borderWidth: 0,
    borderRadius: 5,
    fontSize: 12,
    width: '100%',
    color: '#9F9F9F',
  },
  textArea:{
    backgroundColor:'#6f6f6f80',
    padding: 10,
    borderWidth: 0,
    borderRadius: 5,
    fontSize: 12,
    width: '100%',
    color: '#9F9F9F',
    marginTop: 10,
    marginBottom: 20,
  },
}