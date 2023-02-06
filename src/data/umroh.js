import mock from "./mock";

const data = {
    paketumroh: [
        {
            paketumroh_id:1,
            paketumroh_dep_dates:['2023-01-31'],
            paketumroh_departure:'surabaya',
            paketumroh_desc:'',
            paketumroh_maih_img:'https://i.ibb.co/Fss0DKZ/31-Jan-Lion-SUB.jpg',
            paketumroh_rooms:{double:'34000000',triple:'32500000',quad:'31800000'},
            paketumroh_status:'A',
            paketumroh_title_img:'https://i.ibb.co/yPp4CCg/31-Jan-Lion-SUB.jpg',
            paketumroh_title:'Umrah 2x Shalat Jumat 13 HARI (31 Jan 2023) LION AIR'
        },
        {
            paketumroh_id:2,
            paketumroh_dep_dates:['2023-01-31'],
            paketumroh_departure:'surabaya',
            paketumroh_desc:'',
            paketumroh_maih_img:'https://i.ibb.co/Fss0DKZ/31-Jan-Lion-SUB.jpg',
            paketumroh_rooms:{double:'34000000',triple:'32500000',quad:'31800000'},
            paketumroh_status:'A',
            paketumroh_title_img:'https://i.ibb.co/yPp4CCg/31-Jan-Lion-SUB.jpg',
            paketumroh_title:'Umrah 2x Shalat Jumat 13 HARI (31 Jan 2023) LION AIR'
        },
        {
            paketumroh_id:3,
            paketumroh_dep_dates:['2023-01-31'],
            paketumroh_departure:'surabaya',
            paketumroh_desc:'',
            paketumroh_maih_img:'https://i.ibb.co/Fss0DKZ/31-Jan-Lion-SUB.jpg',
            paketumroh_rooms:{double:'34000000',triple:'32500000',quad:'31800000'},
            paketumroh_status:'A',
            paketumroh_title_img:'https://i.ibb.co/yPp4CCg/31-Jan-Lion-SUB.jpg',
            paketumroh_title:'Umrah 2x Shalat Jumat 13 HARI (31 Jan 2023) LION AIR'
        },
        {
            paketumroh_id:4,
            paketumroh_dep_dates:['2023-01-31'],
            paketumroh_departure:'surabaya',
            paketumroh_desc:'',
            paketumroh_maih_img:'https://i.ibb.co/Fss0DKZ/31-Jan-Lion-SUB.jpg',
            paketumroh_rooms:{double:'34000000',triple:'32500000',quad:'31800000'},
            paketumroh_status:'A',
            paketumroh_title_img:'https://i.ibb.co/yPp4CCg/31-Jan-Lion-SUB.jpg',
            paketumroh_title:'Umrah 2x Shalat Jumat 13 HARI (31 Jan 2023) LION AIR'
        },
        {
            paketumroh_id:5,
            paketumroh_dep_dates:['2023-01-31'],
            paketumroh_departure:'surabaya',
            paketumroh_desc:'',
            paketumroh_maih_img:'https://i.ibb.co/Fss0DKZ/31-Jan-Lion-SUB.jpg',
            paketumroh_rooms:{double:'34000000',triple:'32500000',quad:'31800000'},
            paketumroh_status:'A',
            paketumroh_title_img:'https://i.ibb.co/yPp4CCg/31-Jan-Lion-SUB.jpg',
            paketumroh_title:'Umrah 2x Shalat Jumat 13 HARI (31 Jan 2023) LION AIR'
        },
        {
            paketumroh_id:6,
            paketumroh_dep_dates:['2023-01-31'],
            paketumroh_departure:'surabaya',
            paketumroh_desc:'',
            paketumroh_maih_img:'https://i.ibb.co/Fss0DKZ/31-Jan-Lion-SUB.jpg',
            paketumroh_rooms:{double:'34000000',triple:'32500000',quad:'31800000'},
            paketumroh_status:'A',
            paketumroh_title_img:'https://i.ibb.co/yPp4CCg/31-Jan-Lion-SUB.jpg',
            paketumroh_title:'Umrah 2x Shalat Jumat 13 HARI (31 Jan 2023) LION AIR'
        },
        {
            paketumroh_id:7,
            paketumroh_dep_dates:['2023-01-31'],
            paketumroh_departure:'surabaya',
            paketumroh_desc:'',
            paketumroh_maih_img:'https://i.ibb.co/Fss0DKZ/31-Jan-Lion-SUB.jpg',
            paketumroh_rooms:{double:'34000000',triple:'32500000',quad:'31800000'},
            paketumroh_status:'A',
            paketumroh_title_img:'https://i.ibb.co/yPp4CCg/31-Jan-Lion-SUB.jpg',
            paketumroh_title:'Umrah 2x Shalat Jumat 13 HARI (31 Jan 2023) LION AIR'
        },
        {
            paketumroh_id:8,
            paketumroh_dep_dates:['2023-01-31'],
            paketumroh_departure:'surabaya',
            paketumroh_desc:'',
            paketumroh_maih_img:'https://i.ibb.co/Fss0DKZ/31-Jan-Lion-SUB.jpg',
            paketumroh_rooms:{double:'34000000',triple:'32500000',quad:'31800000'},
            paketumroh_status:'A',
            paketumroh_title_img:'https://i.ibb.co/yPp4CCg/31-Jan-Lion-SUB.jpg',
            paketumroh_title:'Umrah 2x Shalat Jumat 13 HARI (31 Jan 2023) LION AIR'
        },

        {
            paketumroh_id:9,
            paketumroh_dep_dates:['2023-01-31'],
            paketumroh_departure:'surabaya',
            paketumroh_desc:'',
            paketumroh_maih_img:'https://i.ibb.co/Fss0DKZ/31-Jan-Lion-SUB.jpg',
            paketumroh_rooms:{double:'34000000',triple:'32500000',quad:'31800000'},
            paketumroh_status:'A',
            paketumroh_title_img:'https://i.ibb.co/yPp4CCg/31-Jan-Lion-SUB.jpg',
            paketumroh_title:'Umrah 2x Shalat Jumat 13 HARI (31 Jan 2023) LION AIR'
        },
        {
            paketumroh_id:10,
            paketumroh_dep_dates:['2023-01-31'],
            paketumroh_departure:'surabaya',
            paketumroh_desc:'',
            paketumroh_maih_img:'https://i.ibb.co/Fss0DKZ/31-Jan-Lion-SUB.jpg',
            paketumroh_rooms:{double:'34000000',triple:'32500000',quad:'31800000'},
            paketumroh_status:'A',
            paketumroh_title_img:'https://i.ibb.co/yPp4CCg/31-Jan-Lion-SUB.jpg',
            paketumroh_title:'Umrah 2x Shalat Jumat 13 HARI (31 Jan 2023) LION AIR'
        },
        {
            paketumroh_id:11,
            paketumroh_dep_dates:['2023-01-31'],
            paketumroh_departure:'surabaya',
            paketumroh_desc:'',
            paketumroh_maih_img:'https://i.ibb.co/Fss0DKZ/31-Jan-Lion-SUB.jpg',
            paketumroh_rooms:{double:'34000000',triple:'32500000',quad:'31800000'},
            paketumroh_status:'A',
            paketumroh_title_img:'https://i.ibb.co/yPp4CCg/31-Jan-Lion-SUB.jpg',
            paketumroh_title:'Umrah 2x Shalat Jumat 13 HARI (31 Jan 2023) LION AIR'
        },
        {
            paketumroh_id:12,
            paketumroh_dep_dates:['2023-01-31'],
            paketumroh_departure:'surabaya',
            paketumroh_desc:'',
            paketumroh_maih_img:'https://i.ibb.co/Fss0DKZ/31-Jan-Lion-SUB.jpg',
            paketumroh_rooms:{double:'34000000',triple:'32500000',quad:'31800000'},
            paketumroh_status:'A',
            paketumroh_title_img:'https://i.ibb.co/yPp4CCg/31-Jan-Lion-SUB.jpg',
            paketumroh_title:'Umrah 2x Shalat Jumat 13 HARI (31 Jan 2023) LION AIR'
        },
        {
            paketumroh_id:13,
            paketumroh_dep_dates:['2023-01-31'],
            paketumroh_departure:'surabaya',
            paketumroh_desc:'',
            paketumroh_maih_img:'https://i.ibb.co/Fss0DKZ/31-Jan-Lion-SUB.jpg',
            paketumroh_rooms:{double:'34000000',triple:'32500000',quad:'31800000'},
            paketumroh_status:'A',
            paketumroh_title_img:'https://i.ibb.co/yPp4CCg/31-Jan-Lion-SUB.jpg',
            paketumroh_title:'Umrah 2x Shalat Jumat 13 HARI (31 Jan 2023) LION AIR'
        },
        {
            paketumroh_id:14,
            paketumroh_dep_dates:['2023-01-31'],
            paketumroh_departure:'surabaya',
            paketumroh_desc:'',
            paketumroh_maih_img:'https://i.ibb.co/Fss0DKZ/31-Jan-Lion-SUB.jpg',
            paketumroh_rooms:{double:'34000000',triple:'32500000',quad:'31800000'},
            paketumroh_status:'A',
            paketumroh_title_img:'https://i.ibb.co/yPp4CCg/31-Jan-Lion-SUB.jpg',
            paketumroh_title:'Umrah 2x Shalat Jumat 13 HARI (31 Jan 2023) LION AIR'
        },
        {
            paketumroh_id:15,
            paketumroh_dep_dates:['2023-01-31'],
            paketumroh_departure:'surabaya',
            paketumroh_desc:'',
            paketumroh_maih_img:'https://i.ibb.co/Fss0DKZ/31-Jan-Lion-SUB.jpg',
            paketumroh_rooms:{double:'34000000',triple:'32500000',quad:'31800000'},
            paketumroh_status:'A',
            paketumroh_title_img:'https://i.ibb.co/yPp4CCg/31-Jan-Lion-SUB.jpg',
            paketumroh_title:'Umrah 2x Shalat Jumat 13 HARI (31 Jan 2023) LION AIR'
        },
        {
            paketumroh_id:16,
            paketumroh_dep_dates:['2023-01-31'],
            paketumroh_departure:'surabaya',
            paketumroh_desc:'',
            paketumroh_maih_img:'https://i.ibb.co/Fss0DKZ/31-Jan-Lion-SUB.jpg',
            paketumroh_rooms:{double:'34000000',triple:'32500000',quad:'31800000'},
            paketumroh_status:'A',
            paketumroh_title_img:'https://i.ibb.co/yPp4CCg/31-Jan-Lion-SUB.jpg',
            paketumroh_title:'Umrah 2x Shalat Jumat 13 HARI (31 Jan 2023) LION AIR'
        },
    ]
}

mock.onGet('/umroh').reply(()=> [200, data.paketumroh])
