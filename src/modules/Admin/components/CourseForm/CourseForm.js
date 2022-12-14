import React, { useEffect, useState } from "react";
import { Form, Input, Select, DatePicker } from "antd";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import moment from "moment/moment";
import toastMessage from "components/Toast/toastMessage";
import useRequest from "hooks/useRequest";
import courseAPI from "apis/courseAPI";
import "./courseForm.scss";

const { Option } = Select;
const { TextArea } = Input;

const CourseForm = ({ course }) => {
  const [imgPreview, setImgPreview] = useState("");
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (course && course.hinhAnh) setImgPreview(course.hinhAnh);
  }, [user]);

  const { data: categories } = useRequest(() => courseAPI.getCategory());

  const { data: handleAddCourse, isLoading: addLoading } = useRequest(
    (course) => courseAPI.addCourse(course),
    { isManual: true }
  );

  const { data: handleUpdateCourse } = useRequest(
    (course) => courseAPI.updateCourse(course),
    { isManual: true }
  );

  const { handleSubmit, control, setValue } = useForm({
    defaultValues: {
      maKhoaHoc: course?.maKhoaHoc || "",
      biDanh: course?.biDanh || "",
      tenKhoaHoc: course?.tenKhoaHoc || "",
      moTa: course?.moTa || "",
      luotXem: 0,
      danhGia: 0,
      hinhAnh: course?.hinhAnh || "",
      maNhom: "GP01",
      ngayTao: course?.ngayTao ? moment(course.ngayTao) : "",
      maDanhMucKhoaHoc: course ? course.danhMucKhoaHoc.maDanhMucKhoahoc : "",
      taiKhoanNguoiTao: course?.nguoiTao.taiKhoan || user?.taiKhoan,
    },
    mode: "onTouched",
  });

  const onFinish = async (values) => {
    const date = moment(values?.ngayTao).format("DD/MM/YYYY");
    const newValues = {
      ...values,
      ngayTao: date,
      hinhAnh: values.hinhAnh.name,
    };

    if (!course) {
      try {
        await handleAddCourse(newValues);
        toast.success(toastMessage("T???o th??nh c??ng"));
        navigate("/admin/courses");
      } catch (error) {
        toast.error(toastMessage("T???o th???t b???i", error));
      }
    } else {
      try {
        await handleUpdateCourse(newValues);
        toast.success(toastMessage("C???p nh???t th??nh c??ng"));
        navigate("/admin/courses");
      } catch (error) {
        toast.error(toastMessage("C???p nh???t th???t b???i", error));
      }
    }
  };

  const handleChangeImg = (evt) => {
    const file = evt.target.files[0];

    if (!file) return;

    // L??u file v??o field hinhAnh c???a hook form
    setValue("hinhAnh", file);

    // X??? l?? hi???n th??? h??nh ???nh ra giao di???n
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file); // b???t ?????ng b???
    fileReader.onload = (evt) => {
      // ?????c file th??nh c??ng
      // evt.target.result: string base64
      setImgPreview(evt.target.result);
    };
  };

  return (
    <Form
      className="user__form"
      onFinish={handleSubmit(onFinish)}
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 16 }}
      layout="horizontal"
      disabled={addLoading}
    >
      {/* M?? kho?? h???c */}
      <Controller
        name="maKhoaHoc"
        control={control}
        rules={{
          required: {
            value: true,
            message: "Kh??ng ???????c ????? tr???ng",
          },
          maxLength: {
            value: 12,
            message: "Nh???p t???i ??a 12 k?? t???",
          },
          minLength: {
            value: 4,
            message: "T???i thi???u 4 k?? t???",
          },
        }}
        render={({ field, fieldState: { error } }) => (
          <Form.Item
            label="M?? kho?? h???c"
            validateStatus={error ? "error" : ""}
            help={error?.message}
          >
            <Input
              type="text"
              {...field}
              disabled={!!course}
              spellCheck={false}
            />
          </Form.Item>
        )}
      />

      {/* danh m???c kho?? h???c */}
      <Controller
        name="maDanhMucKhoaHoc"
        control={control}
        rules={{
          required: {
            value: true,
            message: "B???n ch??a ch???n Lo???i kho?? h???c",
          },
        }}
        render={({ field, fieldState: { error } }) => (
          <Form.Item
            label="Danh m???c kho?? h???c"
            validateStatus={error ? "error" : ""}
            help={error?.message}
          >
            <Select
              {...field}
              defaultValue=""
              style={{
                width: 200,
              }}
            >
              <Option value="">Lo???i kho?? h???c</Option>
              {categories?.map((item, index) => (
                <Option key={index} value={item?.maDanhMuc}>
                  {item?.tenDanhMuc}
                </Option>
              ))}
            </Select>
          </Form.Item>
        )}
      />

      {/*T??n kho?? h???c  */}
      <Controller
        name="tenKhoaHoc"
        control={control}
        rules={{
          required: {
            value: true,
            message: "Kh??ng ???????c ????? tr???ng",
          },
          minLength: {
            value: 4,
            message: "T???i thi???u 4 k?? t???",
          },
        }}
        render={({ field, fieldState: { error } }) => (
          <Form.Item
            label="T??n kho?? h???c"
            validateStatus={error ? "error" : ""}
            help={error?.message}
          >
            <Input type="text" {...field} spellCheck={false} />
          </Form.Item>
        )}
      />
      {/* B?? danh */}
      <Controller
        name="biDanh"
        control={control}
        rules={{
          required: {
            value: true,
            message: "Kh??ng ???????c ????? tr???ng",
          },
          minLength: {
            value: 4,
            message: "T???i thi???u 4 k?? t???",
          },
        }}
        render={({ field, fieldState: { error } }) => (
          <Form.Item
            label="B?? danh"
            validateStatus={error ? "error" : ""}
            help={error?.message}
          >
            <Input type="text" {...field} spellCheck={false} />
          </Form.Item>
        )}
      />

      {/* Ng?????i t???o */}
      <Controller
        name="taiKhoanNguoiTao"
        control={control}
        rules={{
          required: {
            value: true,
            message: "Kh??ng ???????c ????? tr???ng",
          },
          minLength: {
            value: 4,
            message: "T???i thi???u 4 k?? t???",
          },
        }}
        render={({ field, fieldState: { error } }) => (
          <Form.Item
            label="Ng?????i t???o"
            validateStatus={error ? "error" : ""}
            help={error?.message}
          >
            <Input type="text" {...field} disabled spellCheck={false} />
          </Form.Item>
        )}
      />

      {/*Ng??y t???o  */}
      <Controller
        name="ngayTao"
        control={control}
        rules={{
          required: {
            value: true,
            message: "Ch??a ch???n ng??y t???o kho?? h???c",
          },
        }}
        render={({ field, fieldState: { error } }) => (
          <Form.Item
            label="Ng??y t???o"
            validateStatus={error ? "error" : ""}
            help={error?.message}
          >
            <DatePicker
              {...field}
              format="DD/MM/YYYY"
              placeholder="Ch???n ng??y"
            />
          </Form.Item>
        )}
      />

      {/* H??nh ???nh */}
      <Controller
        name="hinhAnh"
        control={control}
        rules={{
          required: {
            value: true,
            message: "H??nh ???nh kh??ng ???????c ????? tr???ng",
          },
        }}
        render={({ field: { ref }, fieldState: { error } }) => (
          <Form.Item
            label="H??nh ???nh"
            validateStatus={error ? "error" : ""}
            help={error?.message}
          >
            <input
              ref={ref}
              type="file"
              accept="image/png, image/jpeg"
              name="file"
              id="file"
              onChange={handleChangeImg}
              style={{ display: "none" }}
            />

            <div
              className="addImg-btn"
              onClick={() => document.getElementById("file").click()}
            >
              Th??m ???nh
            </div>

            <br />

            {imgPreview && (
              <img style={{ width: "100px" }} src={imgPreview} alt="preview" />
            )}
          </Form.Item>
        )}
      />

      {/*M?? t???  */}
      <Controller
        name="moTa"
        control={control}
        rules={{
          required: {
            value: true,
            message: "M?? t??? kh??ng ???????c ????? tr???ng",
          },
        }}
        render={({ field, fieldState: { error } }) => (
          <Form.Item
            label="M?? t???"
            validateStatus={error ? "error" : ""}
            help={error?.message}
          >
            <TextArea {...field} rows={3} spellCheck={false} />
          </Form.Item>
        )}
      />

      <Form.Item label="Thao t??c">
        <div style={{ display: "flex", alignItems: "center" }}>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: "160px", borderRadius: "15px", padding: "8px" }}
          >
            {course ? "C???p nh???t" : "Th??m"}
          </button>
          <div
            className="btn btn-secondary"
            style={{ padding: "8px", width: "100px", marginLeft: "10px" }}
            onClick={() => navigate("/admin/courses")}
          >
            Hu???
          </div>
        </div>
      </Form.Item>
    </Form>
  );
};

export default CourseForm;
