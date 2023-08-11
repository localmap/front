// ./ 의 위치: frontend/src/
// ../의 위치: frontend/

import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/user/login";
import Join from "./pages/user/join";
import Pwsearch from "./pages/user/pwsearch";
import Mypage from "./pages/user/mypage";
import User_update from "./pages/user/user_update";
import User_review from "./pages/user/user_review";
import Notice from "./pages/board/notice_list";
import EmailCheck from "./pages/user/email_check";
import NickNameCheck from "./pages/user/nickname_check";
import Location from "./pages/user/location";
import Location_search from "./components/location_search";
import Event_detail from "./pages/board/event_detail";
import axios from "axios";
import Pw_reset from "./pages/user/pw_reset";
import Search_result from "./pages/board/search_result";
import Restaurant_write from "./pages/admin/restaurant_write";
import Restaurant_update from "./pages/user/restaurant_update";
import Restaurant_check from "./pages/user/restaurant_check";
import Rec_store from "./pages/user/rec_store";
import Review_write from "./pages/user/review_write";
import Store_info from "./pages/board/store_info";
import Store_list from "./pages/board/store_list";
import Editor_write from "./pages/admin/editor_write";
import Editor_info from "./pages/board/editor_info";
import Editor_update from "./pages/admin/editor_update";
import Editor_list from "./pages/board/editor_list";
import Editor_Manage from "./pages/admin/editor_manage";
import Notice_info from "./pages/board/notice_info";
import Notice_write from "./pages/admin/notice_write";
import Notice_update from "./pages/admin/notice_update";
import Notice_Manage from "./pages/admin/notice_manage";
import Reg_manage from "./pages/admin/reg_manage";

axios.defaults.withCredentials = true;

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/join" element={<Join />} />
      <Route path="/pwsearch" element={<Pwsearch />} />
      <Route path="/pwreset" element={<Pw_reset />} />
      <Route path="/mypage_bookmark" element={<Mypage />} />
      <Route path="/userupdate" element={<User_update />} />
      <Route path="/mypage_review" element={<User_review />} />
      <Route path="/mypage_reg_manage" element={<Reg_manage />} />
      <Route path="/mypage_editor_manage" element={<Editor_Manage />} />
      <Route path="/mypage_notice_manage" element={<Notice_Manage />} />
      <Route path="/notice" element={<Notice />} />
      <Route path="/emailcheck" element={<EmailCheck />} />
      <Route path="/nicknamecheck" element={<NickNameCheck />} />
      <Route path="/location" element={<Location />} />
      <Route path="/location_search" element={<Location_search />} />
      <Route path="/event_detail" element={<Event_detail />} />
      <Route path="/restaurant_write" element={<Restaurant_write />} />
      <Route path="/search_result" element={<Search_result />} />
      <Route path="/restaurant_update" element={<Restaurant_update />} />
      <Route path="/rec_store" element={<Rec_store />} />
      <Route path="/review_write" element={<Review_write />} />
      <Route path="/store_info" element={<Store_info />} />
      <Route path="/store_list" element={<Store_list />} />
      <Route path="/editor_write" element={<Editor_write />} />
      <Route path="/editor_update" element={<Editor_update />} />
      <Route path="/editor_info" element={<Editor_info />} />
      <Route path="/notice_info" element={<Notice_info />} />
      <Route path="/notice_write" element={<Notice_write />} />
      <Route path="/notice_update" element={<Notice_update />} />
      <Route path="/editor_list" element={<Editor_list />} />
      <Route path="/restaurant_check" element={<Restaurant_check />} />
    </Routes>
  );
};
export default App;
