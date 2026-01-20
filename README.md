BÀI TẬP THỰC HÀNH KIỂM THỬ ĐƠN VỊ VỚI JUNIT
1. Thông tin chung

Môn học: Kiểm thử phần mềm

Chủ đề: Phân tích dữ liệu điểm số học sinh

Công nghệ sử dụng: Java, Maven, JUnit 5

Mục tiêu:

Viết kiểm thử tự động (Unit Test) bằng JUnit

Phân tích yêu cầu và kiểm thử chức năng phần mềm

Thực hành sử dụng Git và GitHub (branch, issue, commit)

2. Mô tả bài toán

Xây dựng lớp StudentAnalyzer để phân tích danh sách điểm số của học sinh (giá trị từ 0 đến 10).

2.1. Chức năng 1: Đếm số học sinh đạt loại Giỏi

Phương thức:

public int countExcellentStudents(List<Double> scores)


Yêu cầu:

Đếm số học sinh có điểm >= 8.0

Bỏ qua các điểm không hợp lệ:

Nhỏ hơn 0

Lớn hơn 10

Nếu danh sách rỗng → trả về 0

2.2. Chức năng 2: Tính điểm trung bình hợp lệ

Phương thức:

public double calculateValidAverage(List<Double> scores)


Yêu cầu:

Chỉ tính các điểm hợp lệ (0 ≤ điểm ≤ 10)

Bỏ qua các dữ liệu không hợp lệ

Nếu không có điểm hợp lệ → trả về 0

3. Cấu trúc thư mục dự án
unit-test/
├── pom.xml
├── src/
│   ├── main/
│   │   └── java/
│   │       └── StudentAnalyzer.java
│   └── test/
│       └── java/
│           └── StudentAnalyzerTest.java

4. Kiểm thử với JUnit
4.1. Các trường hợp kiểm thử

Trường hợp bình thường:

Danh sách chứa cả điểm hợp lệ và không hợp lệ

Danh sách toàn bộ điểm hợp lệ

Trường hợp biên:

Danh sách rỗng

Danh sách chỉ chứa giá trị 0 hoặc 10

Trường hợp dữ liệu sai:

Có điểm nhỏ hơn 0

Có điểm lớn hơn 10

4.2. Công cụ kiểm thử

JUnit 5 (JUnit Jupiter)

Các assertion sử dụng:

assertEquals

5. Hướng dẫn chạy chương trình và kiểm thử
5.1. Yêu cầu môi trường

JDK 17

Maven

IntelliJ IDEA (khuyến nghị)

5.2. Chạy kiểm thử trong IntelliJ IDEA

Mở project bằng IntelliJ IDEA

Chờ Maven tải đầy đủ dependencies

Chuột phải vào thư mục src/test/java

Chọn Run 'All Tests'

5.3. Chạy kiểm thử bằng Maven (terminal)
mvn test

6. Quản lý mã nguồn với GitHub

Sử dụng branch riêng: unit-test

Tạo các issue cho từng công việc:

Viết hàm countExcellentStudents

Viết hàm calculateValidAverage

Viết kiểm thử đơn vị với JUnit

Viết tài liệu README

Commit gắn với issue theo đúng quy ước:

feat: implement StudentAnalyzer methods #1 #2
test: add unit tests for StudentAnalyzer #3
docs: add README.md #4

7. Kết luận

Thông qua bài tập này, sinh viên đã:

Hiểu cách xây dựng kiểm thử đơn vị bằng JUnit

Biết cách xử lý dữ liệu đầu vào và các trường hợp biên

Thực hành quy trình phát triển phần mềm với Git và GitHub

Bài tập giúp nâng cao kỹ năng lập trình, kiểm thử và quản lý mã nguồn trong phát triển phần mềm.
