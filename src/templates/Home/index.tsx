import * as Styled from './styles';
import { Form, Button, Upload, Input, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const Post = dynamic(() => import('../../components/Post/index'), {
  ssr: false,
});

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 12,
  },
};

const formTailLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 12,
  },
};

const props = {
  name: 'file',
  accept: 'image',
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const normFile = (e) => {
  console.log('Upload event:', e);
  return e.file;
};

const getBase64 = (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

export function Home() {
  const [posts, setPosts] = useState([]);
  const [form] = Form.useForm();

  useEffect(() => {
    const postsArr = JSON.parse(localStorage.getItem('posts'));
    postsArr?.length > 0 && setPosts(postsArr);
  }, []);

  const onFinish = (values) => {
    form.setFieldsValue({ name: '', message: '' });
    getBase64(values.photo.originFileObj).then((data) => {
      values.photo = data;
      const postsArr = [...posts, values];
      localStorage.setItem('posts', JSON.stringify(postsArr));
      setPosts(postsArr);
    });
  };

  const onDelete = (indexProp: number) => {
    const postsArr = posts.filter((post, index) => index !== indexProp);
    localStorage.setItem('posts', JSON.stringify(postsArr));
    setPosts(postsArr);
  };

  return (
    <Styled.Wrapper>
      {form && (
        <Form
          name="validate_other"
          {...formItemLayout}
          onFinish={onFinish}
          form={form}
          initialValues={{}}
        >
          <h1>Create a post</h1>
          <Form.Item
            name="name"
            label="Post name"
            rules={[
              {
                required: true,
                message: 'Post name is required.',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={'message'}
            label="Post message"
            rules={[
              {
                required: true,
                message: 'Post message is required.',
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name="photo"
            label="Upload Photo"
            valuePropName="file"
            getValueFromEvent={normFile}
            extra=""
            rules={[
              {
                required: true,
                message: 'Post photo is required.',
              },
            ]}
          >
            <Upload {...props}>
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item {...formTailLayout} label="Send Post">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      )}
      <div className="posts">
        <h1>Posts</h1>
        {posts.length > 0 &&
          posts.map((post, index) => {
            return (
              <Post
                onDelete={onDelete}
                index={index}
                key={index}
                name={post.name}
                message={post.message}
                photo={post.photo}
              />
            );
          })}
      </div>
    </Styled.Wrapper>
  );
}
