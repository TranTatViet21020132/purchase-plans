type List = {
    code: string;
    name: string;
    creator: string;
    create_date: string;
    type: string;
    start_date: string;
    end_date: string;
    response: string;
    status: string;
  }

  const fetchList: List[] = [
    {
      code: "SE.2023.0000010",
      name: "Sự kiện chào giá cá hồi Nauy",
      creator: "Hoàng Minh Lý",
      create_date: '06-03-2023',
      type: "RFQ",
      start_date: "06-03-2023",
      end_date: "09-03-2023",
      response: "0 phản hồi",
      status: "Mới tạo"
    },
    {
      code: "SE.2023.0000009",
      name: "Sự kiện đấu thầu lò nướng 2023",
      creator: "Lê Hồng Minh",
      create_date: '05-02-2023',
      type: "RFQ",
      start_date: "06-03-2023",
      end_date: "15-03-2023",
      response: "0 phản hồi",
      status: "Chờ duyệt"
    },
    {
      code: "SE.2023.0000008",
      name: "Sự kiện chào giá sản phẩm sữa",
      creator: "Lê Hồng Minh",
      create_date: '18-01-2023',
      type: "RFP",
      start_date: "20-01-2023",
      end_date: "26-01-2023",
      response: "0 phản hồi",
      status: "Từ chối"
    },
    {
      code: "SE.2023.0000007",
      name: "Sự kiện ua lò nướng công ng...",
      creator: "Mai Linh Lan",
      create_date: '15-01-2023',
      type: "RFP",
      start_date: "18-01-2023",
      end_date: "06-03-2023",
      response: "0 phản hồi",
      status: "Đã hủy"
    },
    {
      code: "SE.2023.0000006",
      name: "Sự kiện marketing",
      creator: "Mai Linh Lan",
      create_date: '06-03-2023',
      type: "RFP",
      start_date: "06-03-2023",
      end_date: "06-03-2023",
      response: "0 phản hồi",
      status: "Đang diễn ra"
    },
    {
      code: "SE.2023.0000005",
      name: "Sự kiện chào giá máy móc VP",
      creator: "Lê Hồng Minh",
      create_date: '26-01-2023',
      type: "RFI",
      start_date: "28-01-2023",
      end_date: "28-02-2023",
      response: "1 phản hồi",
      status: "Hoàn thành PAM"
    },
    {
        code: "SE.2023.0000040",
        name: "Sự kiện chào giá thiết bị y tế 2023",
        creator: "Nguyễn Thị An",
        create_date: '12-04-2023',
        type: "RFQ",
        start_date: "15-04-2023",
        end_date: "20-04-2023",
        response: "0 phản hồi",
        status: "Mới tạo"
      },
      {
        code: "SE.2023.0000039",
        name: "Sự kiện đấu thầu thiết bị văn phòng 2023",
        creator: "Trần Văn Bình",
        create_date: '22-03-2023',
        type: "RFQ",
        start_date: "25-03-2023",
        end_date: "30-03-2023",
        response: "0 phản hồi",
        status: "Chờ duyệt"
      },
      {
        code: "SE.2023.0000038",
        name: "Sự kiện chào giá phần mềm quản lý 2023",
        creator: "Lê Thị Hương",
        create_date: '08-02-2023',
        type: "RFP",
        start_date: "10-02-2023",
        end_date: "15-02-2023",
        response: "0 phản hồi",
        status: "Từ chối"
      },
      {
        code: "SE.2023.0000037",
        name: "Sự kiện ua máy in công nghiệp",
        creator: "Phạm Văn Dũng",
        create_date: '01-02-2023',
        type: "RFP",
        start_date: "05-02-2023",
        end_date: "10-02-2023",
        response: "0 phản hồi",
        status: "Đã hủy"
      },
      {
        code: "SE.2023.0000036",
        name: "Sự kiện tiếp thị số",
        creator: "Nguyễn Thị Hải",
        create_date: '10-03-2023',
        type: "RFP",
        start_date: "12-03-2023",
        end_date: "17-03-2023",
        response: "0 phản hồi",
        status: "Đang diễn ra"
      },
      {
        code: "SE.2023.0000035",
        name: "Sự kiện chào giá vật liệu xây dựng",
        creator: "Phạm Thị Mai",
        create_date: '15-01-2023',
        type: "RFI",
        start_date: "18-01-2023",
        end_date: "20-02-2023",
        response: "1 phản hồi",
        status: "Hoàn thành PAM"
      },
      {
        code: "SE.2023.0000034",
        name: "Sự kiện đấu thầu dịch vụ IT 2023",
        creator: "Nguyễn Văn Cường",
        create_date: '20-04-2023',
        type: "RFQ",
        start_date: "22-04-2023",
        end_date: "25-04-2023",
        response: "0 phản hồi",
        status: "Mới tạo"
      },
      {
        code: "SE.2023.0000033",
        name: "Sự kiện chào giá sản phẩm điện tử 2023",
        creator: "Trần Thị Thủy",
        create_date: '03-03-2023',
        type: "RFQ",
        start_date: "05-03-2023",
        end_date: "10-03-2023",
        response: "0 phản hồi",
        status: "Chờ duyệt"
      },
      {
        code: "SE.2023.0000032",
        name: "Sự kiện đấu thầu dịch vụ vận chuyển 2023",
        creator: "Lê Thanh Tâm",
        create_date: '15-02-2023',
        type: "RFP",
        start_date: "18-02-2023",
        end_date: "23-02-2023",
        response: "0 phản hồi",
        status: "Từ chối"
      },
      {
        code: "SE.2023.0000031",
        name: "Sự kiện chào giá dịch vụ lập trình 2023",
        creator: "Phan Thị Hằng",
        create_date: '10-01-2023',
        type: "RFP",
        start_date: "12-01-2023",
        end_date: "17-01-2023",
        response: "0 phản hồi",
        status: "Đã hủy"
      },
      {
        code: "SE.2023.0000030",
        name: "Sự kiện marketing trực tuyến",
        creator: "Nguyễn Văn Nam",
        create_date: '25-03-2023',
        type: "RFP",
        start_date: "28-03-2023",
        end_date: "30-03-2023",
        response: "0 phản hồi",
        status: "Đang diễn ra"
      },
      {
        code: "SE.2023.0000029",
        name: "Sự kiện chào giá dịch vụ du lịch",
        creator: "Trần Thị Bích",
        create_date: '20-02-2023',
        type: "RFI",
        start_date: "22-02-2023",
        end_date: "25-02-2023",
        response: "1 phản hồi",
        status: "Hoàn thành PAM"
      },
      {
        code: "SE.2023.0000028",
        name: "Sự kiện đấu thầu thiết bị y tế 2023",
        creator: "Nguyễn Thị Hằng",
        create_date: '10-04-2023',
        type: "RFQ",
        start_date: "12-04-2023",
        end_date: "15-04-2023",
        response: "0 phản hồi",
        status: "Mới tạo"
      },
      {
        code: "SE.2023.0000027",
        name: "Sự kiện chào giá dịch vụ tư vấn luật",
        creator: "Lê Thị Mai",
        create_date: '23-03-2023',
        type: "RFQ",
        start_date: "25-03-2023",
        end_date: "30-03-2023",
        response: "0 phản hồi",
        status: "Chờ duyệt"
      },
      {
        code: "SE.2023.0000026",
        name: "Sự kiện đấu thầu xây dựng cơ sở hạ tầng",
        creator: "Nguyễn Văn Đức",
        create_date: '08-02-2023',
        type: "RFP",
        start_date: "10-02-2023",
        end_date: "15-02-2023",
        response: "0 phản hồi",
        status: "Từ chối"
      },
      {
        code: "SE.2023.0000025",
        name: "Sự kiện chào giá dịch vụ thiết kế đồ họa",
        creator: "Trần Văn Tuấn",
        create_date: '05-01-2023',
        type: "RFP",
        start_date: "08-01-2023",
        end_date: "12-01-2023",
        response: "0 phản hồi",
        status: "Đã hủy"
      },
      {
        code: "SE.2023.0000024",
        name: "Sự kiện khuyến mãi sản phẩm mỹ phẩm",
        creator: "Nguyễn Thị Lan",
        create_date: '18-03-2023',
        type: "RFP",
        start_date: "20-03-2023",
        end_date: "25-03-2023",
        response: "0 phản hồi",
        status: "Đang diễn ra"
      },
      {
        code: "SE.2023.0000023",
        name: "Sự kiện chào giá dịch vụ vận tải hàng không",
        creator: "Trần Văn Lợi",
        create_date: '12-02-2023',
        type: "RFI",
        start_date: "15-02-2023",
        end_date: "20-02-2023",
        response: "1 phản hồi",
        status: "Hoàn thành PAM"
      },
      {
        code: "SE.2023.0000057",
        name: "Sự kiện đấu thầu dịch vụ vệ sinh công nghiệp",
        creator: "Nguyễn Văn Nam",
        create_date: '20-05-2023',
        type: "RFQ",
        start_date: "22-05-2023",
        end_date: "25-05-2023",
        response: "0 phản hồi",
        status: "Mới tạo"
      },
      {
        code: "SE.2023.0000056",
        name: "Sự kiện chào giá dịch vụ phát triển ứng dụng di động",
        creator: "Lê Thị Hồng",
        create_date: '15-04-2023',
        type: "RFQ",
        start_date: "18-04-2023",
        end_date: "20-04-2023",
        response: "0 phản hồi",
        status: "Chờ duyệt"
      },
      {
        code: "SE.2023.0000055",
        name: "Sự kiện đấu thầu thiết bị y tế 2023",
        creator: "Trần Văn An",
        create_date: '05-03-2023',
        type: "RFP",
        start_date: "08-03-2023",
        end_date: "12-03-2023",
        response: "0 phản hồi",
        status: "Từ chối"
      },
      {
        code: "SE.2023.0000054",
        name: "Sự kiện chào giá dịch vụ tư vấn kế toán",
        creator: "Lê Thị Mai",
        create_date: '10-02-2023',
        type: "RFP",
        start_date: "12-02-2023",
        end_date: "15-02-2023",
        response: "0 phản hồi",
        status: "Đã hủy"
      },
      {
        code: "SE.2023.0000053",
        name: "Sự kiện khuyến mãi sản phẩm điện tử",
        creator: "Nguyễn Thị Hương",
        create_date: '25-04-2023',
        type: "RFP",
        start_date: "28-04-2023",
        end_date: "30-04-2023",
        response: "0 phản hồi",
        status: "Đang diễn ra"
      },
      {
        code: "SE.2023.0000052",
        name: "Sự kiện chào giá dịch vụ thiết kế website",
        creator: "Lê Văn Dũng",
        create_date: '15-03-2023',
        type: "RFI",
        start_date: "18-03-2023",
        end_date: "22-03-2023",
        response: "1 phản hồi",
        status: "Hoàn thành PAM"
      },
      {
        code: "SE.2023.0000051",
        name: "Sự kiện đấu thầu phần mềm quản lý nhân sự",
        creator: "Trần Thị Anh",
        create_date: '10-01-2023',
        type: "RFQ",
        start_date: "12-01-2023",
        end_date: "15-01-2023",
        response: "0 phản hồi",
        status: "Mới tạo"
      },
      {
        code: "SE.2023.0000050",
        name: "Sự kiện chào giá dịch vụ marketing online",
        creator: "Nguyễn Văn Bình",
        create_date: '05-02-2023',
        type: "RFQ",
        start_date: "08-02-2023",
        end_date: "10-02-2023",
        response: "0 phản hồi",
        status: "Chờ duyệt"
      },
      {
        code: "SE.2023.0000049",
        name: "Sự kiện đấu thầu vận chuyển hàng hóa",
        creator: "Lê Thị Lan",
        create_date: '20-03-2023',
        type: "RFP",
        start_date: "22-03-2023",
        end_date: "25-03-2023",
        response: "0 phản hồi",
        status: "Từ chối"
      },
      {
        code: "SE.2023.0000048",
        name: "Sự kiện chào giá dịch vụ thiết kế đồ họa",
        creator: "Nguyễn Văn Quân",
        create_date: '15-04-2023',
        type: "RFP",
        start_date: "18-04-2023",
        end_date: "20-04-2023",
        response: "0 phản hồi",
        status: "Đã hủy"
      },
      {
        code: "SE.2023.0000047",
        name: "Sự kiện triển lãm sản phẩm công nghệ",
        creator: "Trần Thị Mai",
        create_date: '25-05-2023',
        type: "RFP",
        start_date: "28-05-2023",
        end_date: "30-05-2023",
        response: "0 phản hồi",
        status: "Đang diễn ra"
      },
      {
        code: "SE.2023.0000046",
        name: "Sự kiện chào giá dịch vụ tư vấn luật",
        creator: "Nguyễn Thị Lan",
        create_date: '10-06-2023',
        type: "RFI",
        start_date: "12-06-2023",
        end_date: "15-06-2023",
        response: "1 phản hồi",
        status: "Hoàn thành PAM"
      },
  ];
  
  export default fetchList;
  