import React, { useState } from 'react';
import './App.css';
import { Button, Form, Input, Layout, Modal } from 'antd';
import { ContentComments, DivComments, DivContent, TitleStyled } from './Style';
import {
  CloseCircleOutlined
} from '@ant-design/icons';
import Images from './components/Images';

const { TextArea } = Input;
const { Header, Content } = Layout;


interface Comment {
  text: string;
  name: string;
  url: string;
}

const App: React.FC = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalConfirmOpen, setIsModalConfirmOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    inputUrl: '',
    inputName: '',
    textArea: ''
  });
  const [displayText, setDisplayText] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [displayUrl, setDisplayUrl] = useState('');
  const [open, setOpen] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);

  const send = () => {
    const { inputName, inputUrl, textArea } = formValues;
    setDisplayText(formValues.textArea);
    setDisplayName(formValues.inputName);
    setDisplayUrl(formValues.inputUrl);


    if (!inputName) {
      alert("Digite o nome")
      return;
    }
    if (!textArea) {
      alert("Digite a mensagem")
      return;
    }

    const newComment: Comment = {
      text: formValues.textArea,
      name: formValues.inputName,
      url: formValues.inputUrl
    };

    setComments([...comments, newComment]);
    setDisplayUrl('')
    setFormValues({ inputName: '', inputUrl: '', textArea: '' })
  }

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setDisplayUrl(formValues.inputUrl);

  };

  const showModalConfirm = () => {
    setIsModalConfirmOpen(true)
  };

  const handleOkConfirm = () => {
    handleDeleteAllComment();  
    setIsModalConfirmOpen(false)
  };

  const handleCancelConfirm = () => {
    handleDeleteAllComment();  
    setIsModalConfirmOpen(false)
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleDeleteComment = (index: number) => {
    const updatedComments = [...comments];
    updatedComments.splice(index, 1);
    setComments(updatedComments);
  };

  const handleDeleteAllComment = () => {
    setComments([]);
  };

  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: "#2d2d2d",
          flexDirection: 'column',
        }}
      >
        <TitleStyled>buildbox</TitleStyled>
      </Header>
      <Content style={{
        display: 'flex', minHeight: '898px', height: '100%', alignItems: 'center', flexDirection: 'column',
      }}>
        <DivContent>
          <Images link={displayUrl} />
          <Button onClick={showModal} style={{ marginTop: 10, color: '#0abf0a' }} type='link'>Sua url</Button>
          <Form style={{ borderRadius: 20, background: "#2d2d2d", marginTop: 20, width: '100%' }}>
            <Form.Item style={{ background: '' }}>
              <Input required name='inputName' onChange={handleInputChange} value={formValues.inputName} className='inputArea' placeholder='Digite o seu nome' style={{ border: '#393939', color: 'white', background: 'rgb(67 66 66)' }} />
            </Form.Item>
            <Form.Item>
              <TextArea
                maxLength={100} name='textArea' onChange={handleInputChange} value={formValues.textArea} className='textArea' placeholder='Mensagem' style={{ border: '#393939', color: 'white', background: 'rgb(67 66 66)', height: 70, resize: 'none' }}
              />
            </Form.Item>
          </Form>
          <div style={{ marginTop: 30, width: '100%', float: 'left' }}>
            <Button onClick={send} style={{ background: '#0abf0a', marginLeft: 8, float: 'right' }} type='primary'>
              Publicar
            </Button>
            <Button onClick={showModalConfirm} style={{ background: '#f51010', float: 'right' }} type="primary">
              Descartar
            </Button>
          </div>
        </DivContent>
        {comments.map((comment, index) => (
          <DivComments key={index}>
            <Images link={comment.url} />
            <ContentComments style={{ wordWrap: 'break-word', color: '#7e7e7e' }}>
              <p>{comment.text}</p>
              <ContentComments style={{ margin: '20px 0px 0px 0px', color: '#7e7e7e' }}>
                <p style={{ marginBottom: 7, fontSize: 12 }}>Enviado por</p>
                <p style={{ color: '#a7a5a5', margin: 0, padding: 0 }}>{comment.name}</p>
              </ContentComments>
            </ContentComments>
            <div style={{ fontSize: 15, color: '#f51010', margin: '0px 0px 0px 10px' }}><CloseCircleOutlined onClick={() => handleDeleteComment(index)} /></div>
          </DivComments>
        ))}
      </Content>
      <Modal title="Url Image" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Input name='inputUrl' onChange={handleInputChange} value={formValues.inputUrl}></Input>
      </Modal>
      <Modal title="Confirmar"  open={isModalConfirmOpen} onOk={handleOkConfirm} onCancel={handleCancelConfirm}>
       <p>Deseja excluir todos os dados?</p>
      </Modal>
    </Layout>
  );
};

export default App;