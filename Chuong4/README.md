Báo cáo Kiểm thử Hiệu năng với JMeter - vnexpress.net

1. Giới thiệu
   Đối tượng kiểm thử: Website vnexpress.net.

Công cụ: Apache JMeter 5.6.3.

Môi trường: Chạy kịch bản từ máy cá nhân kết nối Internet thực tế.

2. Thiết kế kịch bản (Test Scenarios)
   Dựa trên cấu trúc file Thread_Group.jmx trong ảnh, tôi đã thiết lập 3 nhóm người dùng ảo:

TG_01_Basic: Kiểm tra phản hồi cơ bản.

TG_02_HeavyLoad: Giả lập tải nặng với 50 người dùng truy cập Trang chủ và Trang chuyên mục.

TG_03_Custom: Duy trì tải trong 60 giây trên 2 trang chuyên mục khác nhau.

3. Kết quả kiểm thử thực tế
   Dưới đây là bảng dữ liệu thu được sau khi thực thi toàn bộ Test Plan:

Bảng thống kê chi tiết:

Label,# Samples,Average (ms),Min (ms),Max (ms),Error %,Throughput
Home Page,100,5830,1731,14995,1.00%,2.6/sec
Category Page (TG2),82,4608,152,13352,10.98%,2.1/sec
Category Page 1 (TG3),49,5603,1896,12972,10.20%,1.3/sec
Category Page 2 (TG3),73,4152,106,12874,15.07%,2.0/sec
TOTAL,304,5061,106,14995,8.55%,7.8/sec

4. Phân tích kết quả (Analysis)
   Dưới góc độ chuyên môn, các con số này cho thấy những điểm đáng lưu ý sau:

Độ ổn định của Trang chủ: Với 100 mẫu thử, trang chủ chỉ gặp lỗi 1%. Thời gian phản hồi trung bình là 5830ms (khá cao). Điều này cho thấy hệ thống ưu tiên xử lý luồng truy cập vào trang chủ nhưng tài nguyên phản hồi vẫn chưa thực sự nhanh.

Vấn đề tại các trang chuyên mục (Category Pages): Tỉ lệ lỗi tăng vọt lên mức 10% - 15%. Đây là dấu hiệu rõ rệt của việc server kích hoạt cơ chế bảo vệ (Rate Limiting). Khi gửi quá nhiều yêu cầu đồng thời đến các trang con, server đã từ chối bớt kết nối để tránh quá tải.

Sự biến động (Std. Dev): Chỉ số độ lệch chuẩn (Std. Dev) ở mức cao (~2700ms) phản ánh sự thiếu ổn định của tốc độ mạng hoặc sự phản hồi không đồng nhất từ server.

Thời gian phản hồi lớn nhất (Max): Có những request mất tới gần 15 giây (14995ms) mới nhận được phản hồi, điều này sẽ gây trải nghiệm rất tệ cho người dùng thật nếu gặp phải.

5. Kết luận & Đề xuất
   Kết luận: Website vnexpress.net có khả năng chịu tải tốt ở mức cơ bản nhưng sẽ bắt đầu chặn yêu cầu nếu phát hiện dấu hiệu truy cập tự động hàng loạt từ một nguồn IP (địa chỉ của bạn).

Đề xuất: \* Sử dụng Constant Timer trong JMeter để giả lập thời gian "nghĩ" của người dùng (Think time), tránh gửi request dồn dập khiến server chặn IP.

Tối ưu hóa dung lượng các trang chuyên mục để giảm thời gian phản hồi (Average Time).
