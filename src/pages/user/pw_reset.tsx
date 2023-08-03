import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { BaseUrl } from "../../util/axiosApi";

const Pw_reset: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        password: "",
        password2: "",
        submit: null,
      }}
      validationSchema={Yup.object().shape({
        password: Yup.string()
          .min(8, "비밀번호는 최소 8자리 이상입니다")
          .max(16, "비밀번호는 최대 16자리입니다!")
          .required("패스워드를 입력하세요!")
          .matches(
            /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[^\s]*$/,
            "알파벳, 숫자, 공백을 제외한 특수문자를 모두 포함해야 합니다!"
          ),
        password2: Yup.string()
          .oneOf([Yup.ref("password")], "비밀번호가 일치하지 않습니다!")
          .required("필수 입력 값입니다!"),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          setSubmitting(true);
          await axios.post(BaseUrl + "/user", {
            headers: {
              "Content-Type": "application/json;charset=UTF-8",
            },
            body: { password: values.password },
          });
          toast.success(
            <h3>
              비밀번호 재설정이 완료되었습니다.
              <br />
              로그인 하세요.
            </h3>,
            {
              position: "top-center",
              autoClose: 2000,
            }
          );
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        } catch (err) {
          setSubmitting(false);
        }
      }}
      validateOnMount={true}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values,
      }) => (
        <div className="signup-wrapper">
          <ToastContainer />
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="input-forms">
              <div className="input-forms-item">
                <div className="input-label">비밀번호</div>
                <TextField
                  value={values.password}
                  name="password"
                  variant="outlined"
                  type="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <div className="error-message">{errors.password}</div>
              </div>
              <div className="input-forms-item">
                <div className="input-label">비밀번호 확인</div>
                <TextField
                  value={values.password2}
                  name="password2"
                  variant="outlined"
                  type="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <div className="error-message">{errors.password2}</div>
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                disableElevation
                fullWidth
                size="large"
                variant="contained"
                color="primary"
              >
                확인
              </Button>
            </div>
          </form>
        </div>
      )}
    </Formik>
  );
};

export default Pw_reset;
