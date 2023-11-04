import { Col, Form, Input, Row, Select } from "antd";
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
    // {
    //   id: 4,
    //   name: "Lego",
    //   imageSrc: SelectSample4,
    //   isChecked: false,
    // },
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

    console.log("Story Values", storyValues)
    props.onClick(storyValues);

  };

  const style = { background: '#0092ff', padding: '8px 0' };
  return (
    <Form
      onFinish={getValues}
      // onFinish={props.onClick}
      autoComplete="off"
      layout="vertical"
      initialValues={{ remember: true, comic_style: "test" }}
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
          <div style={{marginLeft:"5px"}}>
            Age <span className="story-age-label-required">*</span>
            <div className="story-form-detail">
            Between 1 to 12
            </div>
          </div>
        }
        name="age"
        rules={[
          // {
          //   required: true,
          //   message: "Please Enter the Age!",
           
          // },
          {
            min: 1,
            message: "Age should be between 1 to 12",
          },
          {
            max: 12,
            message: "Age should be between 1 to 12",
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              // from 'getFieldValue("fieldName")' we can get the current value of that field.
              if(value){
                if ( value < 1 || value > 12 && value) {
                  // value = currentValue of this field. with that we can do validations with other values in form fields
                  return Promise.reject("Age should be between 1 to 12"); // The validator should always return a promise on both success and error
                }  else {
                  return Promise.resolve();
                }
              } else {
                return Promise.reject("Please Enter the Age!");
              }
              
            }
          })
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
          min={1}
          max={12}
        />
      </Form.Item>
      <Form.Item
        label={
          <div className="story-form-title">
            Gender{" "}
           <div></div>
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
          placeholder="Short curly brown hair, blue eyes, black round glasses"
          style={{
            // height: "120px",
            borderRadius: "9px",
            width: "340px",
            resize: "none",
            border: "1px solid #ADADAD",
            color:"#6F767E"
          }}
          rows={3}
        />
      </Form.Item>
      
      <Form.Item label={<div style={{marginLeft:"5px"}}>
      Main Interest{" "}
      <div className="story-form-detail">
      What does your character love doing most?
            </div>
            
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
          placeholder="Basketball"
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

{/* <Select
          allowClear
          placeholder="Hong Kong"
          // onChange={handleChange}
          options={dummyLocationList}
          style={{
            height: "48px",
            borderRadius: "9px",
            width: "340px",
          }}
          showSearch
        /> */}

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
          placeholder="The importance of teamwork or not being wasteful."
          style={{
            // height: "120px",
            borderRadius: "9px",
            width: "340px",
            resize: "none",
            border: "1px solid #ADADAD",
            color:"#6F767E"
          }}
          rows={3}
        />
      </Form.Item>
      <Form.Item
        label={
          <div className="story-form-title">
            Illustration style
            
          </div>
        }
        name="comic_style"
        rules={[
          {
            required: true,
            message: "Please Select Illustration!",
          },
        ]}
        
      >
     
            
     
  
        {/* <div style={{ display: "flex", gap: "12px", overflowX:"auto" }}> */}
        <Row gutter={[16, 24]}>
          {checkedData.map((item) => {
            return (
              <Col className="gutter-row" span={12}>
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
                    <div className="story-check-illustration-style">
                        <CheckCircleFilled
                      style={{ fontSize: "22px", color: "#EB1551" }}
                      className="checkedFilled"
                    />
                    </div>
                  
                  )}
                </div>
                <div style={{ fontSize: "12px", color: "#696974" }}>
                  {item.name}
                </div>
   
               
              </div>
              </Col>
             
            );
          })}
            </Row>
        {/* </div> */}
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
