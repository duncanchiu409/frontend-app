import { Form, Input, Select } from "antd";
import React, { useState } from "react";
import ComponentInput from "../../atoms/ComponentInput";
import "./CreateStorySidebar.css";
import ComponentButton from "../../atoms/ComponentButton";
import SelectSample1 from "../../assets/papercut.png";
import SelectSample2 from "../../assets/cartoon.png";
import SelectSample3 from "../../assets/anime.png";
import SelectSample4 from "../../assets/lego.png";
import SelectSample5 from '../../assets/pixar.png'
import SelectSample6 from '../../assets/comic.webp'
import SelectSample7 from '../../assets/pop-art.webp'
import { CheckCircleFilled } from "@ant-design/icons";

const CreateStorySidebar = (props) => {
  const handleChange = (values) => {
    console.log(`selected ${values}`);
  };
  const dummyCheckboxList = [
    {
      id: 1,
      name: "Paper cut",
      imageSrc: SelectSample1,
      isChecked: true,
    },
    {
      id: 2,
      name: "Cartoon",
      imageSrc: SelectSample2,
      isChecked: false,
    },
    {
      id: 3,
      name: "Anime",
      imageSrc: SelectSample3,
      isChecked: false,
    },
    {
      id: 4,
      name: "Lego",
      imageSrc: SelectSample4,
      isChecked: false,
    },
    {
      id: 5,
      name: "Pixar",
      imageSrc: SelectSample5,
      isChecked: false,
    },
    {
      id: 6,
      name: "Comic",
      imageSrc: SelectSample6,
      isChecked: false,
    },
    {
      id: 7,
      name: "Pop Art",
      imageSrc: SelectSample7,
      isChecked: false,
    }
  ];
  const [checkedData, setIsCheckedData] = useState(dummyCheckboxList);
  const [checkedSelected,setCheckedSelected] = useState("Paper cut");

  const dummyList = [
    {
      label: "East Asian",
      value: "East Asian",
    },
  ];
  const genderDummyList = [
    {
      label: "Male",
      value: "Male",
    },
    {
      label: "Female",
      value: "Female",
    }
  ];
  const dummyActivityList = [
    {
      label: "School",
      value: "School",
    },
    {
      label: "Study",
      value: "Study",
    },
    {
      label: "Eat",
      value: "Eat",
    },
    {
      label: "Read",
      value: "Read",
    },
  ];
  const dummyLocationList = [
    {
      label: "California",
      value: "California",
    },
    {
      label: "New York",
      value: "New York",
    },
    {
      label: "Hong Kong",
      value: "Hong Kong",
    },
  ];

  const interestList = [
    {
      label: "Dance",
      value: "Dance",
    },
    {
      label: "Music",
      value: "Music",
    },
    {
      label: "Painting",
      value: "Painting",
    },
  ]

  const handleChecked = (itemId) => {
    checkedData.map((item) => {
      if (item.id === itemId) {
        item.isChecked = true;
        setCheckedSelected(item.name);
      } else {
        item.isChecked = false;
      }
    });
    setIsCheckedData([...checkedData]);
  };
  const getValues = (values) => {
    let storyValues = values;
    storyValues.comic_style = checkedSelected;
    props.onClick(storyValues);

  };
  return (
    <Form
      onFinish={getValues}
      // onFinish={props.onClick}
      autoComplete="off"
      layout="vertical"
      initialValues={{ remember: true }}
      style={{ maxWidth: "340px" }}
      className="story-sidebar"
    >
      <div className="story-sidebar-heading">YOUR CHARACTER</div>
      <Form.Item
        label={
          <div className="story-form-title">
            Name
           
          </div>
        }
        name="name"
        rules={[
          {
            required: true,
            message: "Please Enter the Name!",
          },
        ]}
      >
        <ComponentInput
          placeholder="Kianna Torff"
          style={{
            height: "48px",
            borderRadius: "9px",
            width: "340px",
          }}
        />
      </Form.Item>
      <Form.Item
        label={
          <div className="story-form-title">
            Age
            
          </div>
        }
        name="age"
        rules={[
          {
            required: true,
            message: "Please Enter the Age!",
          },
        ]}
        type="number"
      >
        <ComponentInput
          placeholder="Enter Age"
          style={{
            height: "48px",
            borderRadius: "9px",
            width: "340px",
          }}
          type="number"
        />
      </Form.Item>
      <Form.Item
        label={
          <div className="story-form-title">
            Gender{" "}
           
          </div>
        }
        name="gender"
        rules={[
          {
            required: true,
            message: "Please Select Gender!",
          },
        ]}
      >
        <Select
          allowClear
          placeholder="Please select"
          // onChange={handleChange}
          options={genderDummyList}
          style={{
            height: "48px",
            borderRadius: "9px",
            width: "340px",
          }}
        />
      </Form.Item>
     
      <Form.Item label={<div className="story-form-title">Ethnicity</div>} name="race" rules={[
          {
            required: true,
            message: "Please Enter Race!",
          },
        ]}>

<ComponentInput
          placeholder="Asian"
          style={{
            height: "48px",
            borderRadius: "9px",
            width: "340px",
          }}
        />
       
      </Form.Item>
      <Form.Item
        label={
          <div style={{marginLeft:"5px"}}>
            Appearance
            <div className="story-form-detail">
            Describe your character with 2-3 defining features​
            </div>
          </div>
        }
        name="appearance"
       
      >
        <Input.TextArea
          placeholder="short curly brown hair, blue eyes, black round glasses"
          style={{
            height: "120px",
            borderRadius: "9px",
            width: "340px",
            resize: "none",
          }}
        />
      </Form.Item>
      
      <Form.Item label={<div className="story-form-title" style={{marginLeft:"5px"}}>
           Interests{" "}
            
          </div>} name="other_details" 
        >
       
        {/* <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          onChange={handleChange}
          options={interestList}
          style={{
            height: "48px",
            borderRadius: "9px",
            width: "340px",
          }}
        /> */}
         <ComponentInput
          placeholder="Loves basketball"
          style={{
            height: "48px",
            borderRadius: "9px",
            width: "340px",
          }}
        />
      </Form.Item>
      {/* <Form.Item
        label={
          <div>
            Recent Activities{" "}
            <div className="story-form-detail">
              What your child like to play/study/eat etc..
            </div>
          </div>
        }
        name="recent_activities"
        rules={[
          {
            required: true,
            message: "Please Select Recent Activity!",
          },
        ]}
      >
        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          // onChange={handleChange}
          options={dummyActivityList}
          style={{
            height: "48px",
            borderRadius: "9px",
            width: "340px",
          }}
        />
      </Form.Item> */}
      <Form.Item
        label={
          <div className="story-form-title">
            Hometown
           
          </div>
        }
        name="location"
        rules={[
          {
            required: true,
            message: "Please Select Hometown!",
          },
        ]}
      >
          <ComponentInput
          placeholder="Hong Kong"
          style={{
            height: "48px",
            borderRadius: "9px",
            width: "340px",
          }}
        />
      </Form.Item>
      <div className="story-sidebar-heading">Your Story</div>
      <Form.Item
        label={
          <div >
            Moral of the story/Lesson to learn
            <div className="story-form-detail">
            What’s the moral of your story?
            </div>
          </div>
        }
        name="moral"
        rules={[
          {
            required: true,
            message: "Please Enter Lesson/Moral for Comic",
          },
        ]}
      >
        <Input.TextArea
          placeholder="the importance of teamwork or not being wasteful."
          style={{
            height: "120px",
            borderRadius: "9px",
            width: "340px",
            resize: "none",
          }}
        />
      </Form.Item>
      <Form.Item
        label={
          <div className="story-form-title">
            Illustration style
            
          </div>
        }
        name="comic_style"
      >
        <div style={{ display: "flex", gap: "12px", overflowX:"auto" }}>
          {checkedData.map((item) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={() => {
                  handleChecked(item?.id);
                }}
              >
                <div className="checkbox-image">
                  <img
                    src={item?.imageSrc}
                    className="select-comic-style-image"
                  />
                  {item?.isChecked && (
                    <CheckCircleFilled
                      style={{ fontSize: "19.5px", color: "#ffffff" }}
                      className="checkedFilled"
                    />
                  )}
                </div>
                <div style={{ fontSize: "12px", color: "#696974" }}>
                  {item.name}
                </div>
              </div>
            );
          })}
        </div>
      </Form.Item>
      <Form.Item>
        <ComponentButton
          title={"Generate Story"}
          style={{
            width: "100%",
            fontSize: "16px",
            fontWeight: "700",
            height: "50px",
            backgroundColor: "#EB1551",
          }}
          htmlType="submit"
        />
      </Form.Item>
    </Form>
  );
};

export default CreateStorySidebar;
