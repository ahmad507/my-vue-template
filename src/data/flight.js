import mock from "./mock";

const data = {
    flight: [
        {
            "status": 200,
            "message": "Normal",
            "data": {
                "FlightSearchResult": {
                    "FlightSegment": [
                        {
                            "Id": 0,
                            "FlightSegmentDepartureDateTime": "2023-01-23T05:30:00",
                            "FlightSegmentArrivalDateTime": "2023-01-23T06:35:00",
                            "FlightSegmentStopQuantity": 0,
                            "FlightSegmentRPH": "0",
                            "FlightSegmentFlightNumber": "6870",
                            "DepartureAirport": "CGK",
                            "ArrivalAirport": "PLM",
                            "OperatingAirlineCode": "ID",
                            "OperatingAirlineCompanyShortName": "Operated by Batik Air ",
                            "OperatingAirlineCodeContext": "IATA",
                            "OperatingAirlineFlightNumber": "6870",
                            "Equipment": "737-800",
                            "MarketingAirlineCode": "ID",
                            "MarketingAirlineCodeContext": "IATA",
                            "Duration": "01:05",
                            "BookingClassAvails": [
                                {
                                    "FareBasisCodes": "CIDOW",
                                    "ResBookDesigCode": "C",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "DIDOW",
                                    "ResBookDesigCode": "D",
                                    "ResBookDesigQuantity": 4,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "IIDOW",
                                    "ResBookDesigCode": "I",
                                    "ResBookDesigQuantity": 2,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 1670680
                                },
                                {
                                    "FareBasisCodes": "ZIDOW",
                                    "ResBookDesigCode": "Z",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "YIDOW",
                                    "ResBookDesigCode": "Y",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "AIDOW",
                                    "ResBookDesigCode": "A",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "GIDOW",
                                    "ResBookDesigCode": "G",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "WIDOW",
                                    "ResBookDesigCode": "W",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "SIDOW",
                                    "ResBookDesigCode": "S",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 2802180
                                },
                                {
                                    "FareBasisCodes": "BIDOW",
                                    "ResBookDesigCode": "B",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "HIDOW",
                                    "ResBookDesigCode": "H",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "KIDOW",
                                    "ResBookDesigCode": "K",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 1448430
                                },
                                {
                                    "FareBasisCodes": "LIDOW",
                                    "ResBookDesigCode": "L",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 778300
                                },
                                {
                                    "FareBasisCodes": "MIDOW",
                                    "ResBookDesigCode": "M",
                                    "ResBookDesigQuantity": 6,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 781580
                                },
                                {
                                    "FareBasisCodes": "NIDOW",
                                    "ResBookDesigCode": "N",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "QIDOW",
                                    "ResBookDesigCode": "Q",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "TIDOW",
                                    "ResBookDesigCode": "T",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "VIDOW",
                                    "ResBookDesigCode": "V",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "XIDOW",
                                    "ResBookDesigCode": "X",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                }
                            ]
                        },
                        {
                            "Id": 1,
                            "FlightSegmentDepartureDateTime": "2023-01-23T06:00:00",
                            "FlightSegmentArrivalDateTime": "2023-01-23T07:05:00",
                            "FlightSegmentStopQuantity": 0,
                            "FlightSegmentRPH": "0",
                            "FlightSegmentFlightNumber": "340",
                            "DepartureAirport": "CGK",
                            "ArrivalAirport": "PLM",
                            "OperatingAirlineCode": "JT",
                            "OperatingAirlineCompanyShortName": "Operated by Lion Air ",
                            "OperatingAirlineCodeContext": "IATA",
                            "OperatingAirlineFlightNumber": "340",
                            "Equipment": "737-800",
                            "MarketingAirlineCode": "JT",
                            "MarketingAirlineCodeContext": "IATA",
                            "Duration": "01:05",
                            "BookingClassAvails": [
                                {
                                    "FareBasisCodes": "YOW",
                                    "ResBookDesigCode": "Y",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "AOW",
                                    "ResBookDesigCode": "A",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "GOW",
                                    "ResBookDesigCode": "G",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "WOW",
                                    "ResBookDesigCode": "W",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 2670680
                                },
                                {
                                    "FareBasisCodes": "SOW",
                                    "ResBookDesigCode": "S",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "BOW",
                                    "ResBookDesigCode": "B",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "HOW",
                                    "ResBookDesigCode": "H",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "KOW",
                                    "ResBookDesigCode": "K",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "LOW",
                                    "ResBookDesigCode": "L",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 1270630
                                },
                                {
                                    "FareBasisCodes": "MOW",
                                    "ResBookDesigCode": "M",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 681630
                                },
                                {
                                    "FareBasisCodes": "NOW",
                                    "ResBookDesigCode": "N",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "QOW",
                                    "ResBookDesigCode": "Q",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "TOW",
                                    "ResBookDesigCode": "T",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "VOW",
                                    "ResBookDesigCode": "V",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "XOW",
                                    "ResBookDesigCode": "X",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                }
                            ]
                        },
                        {
                            "Id": 2,
                            "FlightSegmentDepartureDateTime": "2023-01-23T07:00:00",
                            "FlightSegmentArrivalDateTime": "2023-01-23T08:05:00",
                            "FlightSegmentStopQuantity": 0,
                            "FlightSegmentRPH": "0",
                            "FlightSegmentFlightNumber": "870",
                            "DepartureAirport": "CGK",
                            "ArrivalAirport": "PLM",
                            "OperatingAirlineCode": "IU",
                            "OperatingAirlineCompanyShortName": "Operated by Super Air Jet ",
                            "OperatingAirlineCodeContext": "IATA",
                            "OperatingAirlineFlightNumber": "870",
                            "Equipment": "320",
                            "MarketingAirlineCode": "IU",
                            "MarketingAirlineCodeContext": "IATA",
                            "Duration": "01:05",
                            "BookingClassAvails": [
                                {
                                    "FareBasisCodes": "YIUOW",
                                    "ResBookDesigCode": "Y",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "AIUOW",
                                    "ResBookDesigCode": "A",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "GIUOW",
                                    "ResBookDesigCode": "G",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "WIUOW",
                                    "ResBookDesigCode": "W",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "SIUOW",
                                    "ResBookDesigCode": "S",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "BIUOW",
                                    "ResBookDesigCode": "B",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "HIUOW",
                                    "ResBookDesigCode": "H",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "KIUOW",
                                    "ResBookDesigCode": "K",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 741650
                                },
                                {
                                    "FareBasisCodes": "LIUOW",
                                    "ResBookDesigCode": "L",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "MIUOW",
                                    "ResBookDesigCode": "M",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "NIUOW",
                                    "ResBookDesigCode": "N",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "QIUOW",
                                    "ResBookDesigCode": "Q",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 582950
                                },
                                {
                                    "FareBasisCodes": "TIUOW",
                                    "ResBookDesigCode": "T",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 543050
                                },
                                {
                                    "FareBasisCodes": "VIUOW",
                                    "ResBookDesigCode": "V",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "XIUOW",
                                    "ResBookDesigCode": "X",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                }
                            ]
                        },
                        {
                            "Id": 3,
                            "FlightSegmentDepartureDateTime": "2023-01-23T08:00:00",
                            "FlightSegmentArrivalDateTime": "2023-01-23T09:05:00",
                            "FlightSegmentStopQuantity": 0,
                            "FlightSegmentRPH": "0",
                            "FlightSegmentFlightNumber": "334",
                            "DepartureAirport": "CGK",
                            "ArrivalAirport": "PLM",
                            "OperatingAirlineCode": "JT",
                            "OperatingAirlineCompanyShortName": "Operated by Lion Air ",
                            "OperatingAirlineCodeContext": "IATA",
                            "OperatingAirlineFlightNumber": "334",
                            "Equipment": "737-900ER",
                            "MarketingAirlineCode": "JT",
                            "MarketingAirlineCodeContext": "IATA",
                            "Duration": "01:05",
                            "BookingClassAvails": [
                                {
                                    "FareBasisCodes": "YOW",
                                    "ResBookDesigCode": "Y",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "AOW",
                                    "ResBookDesigCode": "A",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "GOW",
                                    "ResBookDesigCode": "G",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "WOW",
                                    "ResBookDesigCode": "W",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 2670680
                                },
                                {
                                    "FareBasisCodes": "SOW",
                                    "ResBookDesigCode": "S",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "BOW",
                                    "ResBookDesigCode": "B",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "HOW",
                                    "ResBookDesigCode": "H",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "KOW",
                                    "ResBookDesigCode": "K",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "LOW",
                                    "ResBookDesigCode": "L",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 1270630
                                },
                                {
                                    "FareBasisCodes": "MOW",
                                    "ResBookDesigCode": "M",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 681630
                                },
                                {
                                    "FareBasisCodes": "NOW",
                                    "ResBookDesigCode": "N",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "QOW",
                                    "ResBookDesigCode": "Q",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "TOW",
                                    "ResBookDesigCode": "T",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "VOW",
                                    "ResBookDesigCode": "V",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "XOW",
                                    "ResBookDesigCode": "X",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                }
                            ]
                        },
                        {
                            "Id": 4,
                            "FlightSegmentDepartureDateTime": "2023-01-23T09:30:00",
                            "FlightSegmentArrivalDateTime": "2023-01-23T10:35:00",
                            "FlightSegmentStopQuantity": 0,
                            "FlightSegmentRPH": "0",
                            "FlightSegmentFlightNumber": "344",
                            "DepartureAirport": "CGK",
                            "ArrivalAirport": "PLM",
                            "OperatingAirlineCode": "JT",
                            "OperatingAirlineCompanyShortName": "Operated by Lion Air ",
                            "OperatingAirlineCodeContext": "IATA",
                            "OperatingAirlineFlightNumber": "344",
                            "Equipment": "737-800",
                            "MarketingAirlineCode": "JT",
                            "MarketingAirlineCodeContext": "IATA",
                            "Duration": "01:05",
                            "BookingClassAvails": [
                                {
                                    "FareBasisCodes": "YOW",
                                    "ResBookDesigCode": "Y",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "AOW",
                                    "ResBookDesigCode": "A",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "GOW",
                                    "ResBookDesigCode": "G",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "WOW",
                                    "ResBookDesigCode": "W",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 2670680
                                },
                                {
                                    "FareBasisCodes": "SOW",
                                    "ResBookDesigCode": "S",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "BOW",
                                    "ResBookDesigCode": "B",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "HOW",
                                    "ResBookDesigCode": "H",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "KOW",
                                    "ResBookDesigCode": "K",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "LOW",
                                    "ResBookDesigCode": "L",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 1270630
                                },
                                {
                                    "FareBasisCodes": "MOW",
                                    "ResBookDesigCode": "M",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 681630
                                },
                                {
                                    "FareBasisCodes": "NOW",
                                    "ResBookDesigCode": "N",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "QOW",
                                    "ResBookDesigCode": "Q",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "TOW",
                                    "ResBookDesigCode": "T",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "VOW",
                                    "ResBookDesigCode": "V",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "XOW",
                                    "ResBookDesigCode": "X",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                }
                            ]
                        },
                        {
                            "Id": 5,
                            "FlightSegmentDepartureDateTime": "2023-01-23T09:35:00",
                            "FlightSegmentArrivalDateTime": "2023-01-23T10:40:00",
                            "FlightSegmentStopQuantity": 0,
                            "FlightSegmentRPH": "0",
                            "FlightSegmentFlightNumber": "922",
                            "DepartureAirport": "CGK",
                            "ArrivalAirport": "PLM",
                            "OperatingAirlineCode": "IU",
                            "OperatingAirlineCompanyShortName": "Operated by Super Air Jet ",
                            "OperatingAirlineCodeContext": "IATA",
                            "OperatingAirlineFlightNumber": "922",
                            "Equipment": "320",
                            "MarketingAirlineCode": "IU",
                            "MarketingAirlineCodeContext": "IATA",
                            "Duration": "01:05",
                            "BookingClassAvails": [
                                {
                                    "FareBasisCodes": "YIUOW",
                                    "ResBookDesigCode": "Y",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "AIUOW",
                                    "ResBookDesigCode": "A",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "GIUOW",
                                    "ResBookDesigCode": "G",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "WIUOW",
                                    "ResBookDesigCode": "W",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "SIUOW",
                                    "ResBookDesigCode": "S",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "BIUOW",
                                    "ResBookDesigCode": "B",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "HIUOW",
                                    "ResBookDesigCode": "H",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "KIUOW",
                                    "ResBookDesigCode": "K",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 741650
                                },
                                {
                                    "FareBasisCodes": "LIUOW",
                                    "ResBookDesigCode": "L",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "MIUOW",
                                    "ResBookDesigCode": "M",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "NIUOW",
                                    "ResBookDesigCode": "N",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "QIUOW",
                                    "ResBookDesigCode": "Q",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 582950
                                },
                                {
                                    "FareBasisCodes": "TIUOW",
                                    "ResBookDesigCode": "T",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 543050
                                },
                                {
                                    "FareBasisCodes": "VIUOW",
                                    "ResBookDesigCode": "V",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "XIUOW",
                                    "ResBookDesigCode": "X",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                }
                            ]
                        },
                        {
                            "Id": 6,
                            "FlightSegmentDepartureDateTime": "2023-01-23T10:15:00",
                            "FlightSegmentArrivalDateTime": "2023-01-23T11:20:00",
                            "FlightSegmentStopQuantity": 0,
                            "FlightSegmentRPH": "0",
                            "FlightSegmentFlightNumber": "874",
                            "DepartureAirport": "CGK",
                            "ArrivalAirport": "PLM",
                            "OperatingAirlineCode": "IU",
                            "OperatingAirlineCompanyShortName": "Operated by Super Air Jet ",
                            "OperatingAirlineCodeContext": "IATA",
                            "OperatingAirlineFlightNumber": "874",
                            "Equipment": "320",
                            "MarketingAirlineCode": "IU",
                            "MarketingAirlineCodeContext": "IATA",
                            "Duration": "01:05",
                            "BookingClassAvails": [
                                {
                                    "FareBasisCodes": "YIUOW",
                                    "ResBookDesigCode": "Y",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "AIUOW",
                                    "ResBookDesigCode": "A",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "GIUOW",
                                    "ResBookDesigCode": "G",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "WIUOW",
                                    "ResBookDesigCode": "W",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "SIUOW",
                                    "ResBookDesigCode": "S",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "BIUOW",
                                    "ResBookDesigCode": "B",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "HIUOW",
                                    "ResBookDesigCode": "H",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "KIUOW",
                                    "ResBookDesigCode": "K",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 741650
                                },
                                {
                                    "FareBasisCodes": "LIUOW",
                                    "ResBookDesigCode": "L",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "MIUOW",
                                    "ResBookDesigCode": "M",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "NIUOW",
                                    "ResBookDesigCode": "N",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "QIUOW",
                                    "ResBookDesigCode": "Q",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 582950
                                },
                                {
                                    "FareBasisCodes": "TIUOW",
                                    "ResBookDesigCode": "T",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 543050
                                },
                                {
                                    "FareBasisCodes": "VIUOW",
                                    "ResBookDesigCode": "V",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "XIUOW",
                                    "ResBookDesigCode": "X",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                }
                            ]
                        },
                        {
                            "Id": 7,
                            "FlightSegmentDepartureDateTime": "2023-01-23T10:30:00",
                            "FlightSegmentArrivalDateTime": "2023-01-23T11:35:00",
                            "FlightSegmentStopQuantity": 0,
                            "FlightSegmentRPH": "0",
                            "FlightSegmentFlightNumber": "6872",
                            "DepartureAirport": "CGK",
                            "ArrivalAirport": "PLM",
                            "OperatingAirlineCode": "ID",
                            "OperatingAirlineCompanyShortName": "Operated by Batik Air ",
                            "OperatingAirlineCodeContext": "IATA",
                            "OperatingAirlineFlightNumber": "6872",
                            "Equipment": "737-800",
                            "MarketingAirlineCode": "ID",
                            "MarketingAirlineCodeContext": "IATA",
                            "Duration": "01:05",
                            "BookingClassAvails": [
                                {
                                    "FareBasisCodes": "CIDOW",
                                    "ResBookDesigCode": "C",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "DIDOW",
                                    "ResBookDesigCode": "D",
                                    "ResBookDesigQuantity": 4,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "IIDOW",
                                    "ResBookDesigCode": "I",
                                    "ResBookDesigQuantity": 1,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 1670680
                                },
                                {
                                    "FareBasisCodes": "ZIDOW",
                                    "ResBookDesigCode": "Z",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "YIDOW",
                                    "ResBookDesigCode": "Y",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "AIDOW",
                                    "ResBookDesigCode": "A",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "GIDOW",
                                    "ResBookDesigCode": "G",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "WIDOW",
                                    "ResBookDesigCode": "W",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "SIDOW",
                                    "ResBookDesigCode": "S",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 2802180
                                },
                                {
                                    "FareBasisCodes": "BIDOW",
                                    "ResBookDesigCode": "B",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "HIDOW",
                                    "ResBookDesigCode": "H",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "KIDOW",
                                    "ResBookDesigCode": "K",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 1448430
                                },
                                {
                                    "FareBasisCodes": "LIDOW",
                                    "ResBookDesigCode": "L",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 778300
                                },
                                {
                                    "FareBasisCodes": "MIDOW",
                                    "ResBookDesigCode": "M",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 781580
                                },
                                {
                                    "FareBasisCodes": "NIDOW",
                                    "ResBookDesigCode": "N",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "QIDOW",
                                    "ResBookDesigCode": "Q",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "TIDOW",
                                    "ResBookDesigCode": "T",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "VIDOW",
                                    "ResBookDesigCode": "V",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "XIDOW",
                                    "ResBookDesigCode": "X",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                }
                            ]
                        },
                        {
                            "Id": 8,
                            "FlightSegmentDepartureDateTime": "2023-01-23T11:30:00",
                            "FlightSegmentArrivalDateTime": "2023-01-23T12:35:00",
                            "FlightSegmentStopQuantity": 0,
                            "FlightSegmentRPH": "0",
                            "FlightSegmentFlightNumber": "338",
                            "DepartureAirport": "CGK",
                            "ArrivalAirport": "PLM",
                            "OperatingAirlineCode": "JT",
                            "OperatingAirlineCompanyShortName": "Operated by Lion Air ",
                            "OperatingAirlineCodeContext": "IATA",
                            "OperatingAirlineFlightNumber": "338",
                            "Equipment": "737-900ER",
                            "MarketingAirlineCode": "JT",
                            "MarketingAirlineCodeContext": "IATA",
                            "Duration": "01:05",
                            "BookingClassAvails": [
                                {
                                    "FareBasisCodes": "YOW",
                                    "ResBookDesigCode": "Y",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "AOW",
                                    "ResBookDesigCode": "A",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "GOW",
                                    "ResBookDesigCode": "G",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "WOW",
                                    "ResBookDesigCode": "W",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 2670680
                                },
                                {
                                    "FareBasisCodes": "SOW",
                                    "ResBookDesigCode": "S",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "BOW",
                                    "ResBookDesigCode": "B",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "HOW",
                                    "ResBookDesigCode": "H",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "KOW",
                                    "ResBookDesigCode": "K",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "LOW",
                                    "ResBookDesigCode": "L",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 1270630
                                },
                                {
                                    "FareBasisCodes": "MOW",
                                    "ResBookDesigCode": "M",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 681630
                                },
                                {
                                    "FareBasisCodes": "NOW",
                                    "ResBookDesigCode": "N",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "QOW",
                                    "ResBookDesigCode": "Q",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "TOW",
                                    "ResBookDesigCode": "T",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "VOW",
                                    "ResBookDesigCode": "V",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "XOW",
                                    "ResBookDesigCode": "X",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                }
                            ]
                        },
                        {
                            "Id": 9,
                            "FlightSegmentDepartureDateTime": "2023-01-23T13:00:00",
                            "FlightSegmentArrivalDateTime": "2023-01-23T14:05:00",
                            "FlightSegmentStopQuantity": 0,
                            "FlightSegmentRPH": "0",
                            "FlightSegmentFlightNumber": "346",
                            "DepartureAirport": "CGK",
                            "ArrivalAirport": "PLM",
                            "OperatingAirlineCode": "JT",
                            "OperatingAirlineCompanyShortName": "Operated by Lion Air ",
                            "OperatingAirlineCodeContext": "IATA",
                            "OperatingAirlineFlightNumber": "346",
                            "Equipment": "737-800",
                            "MarketingAirlineCode": "JT",
                            "MarketingAirlineCodeContext": "IATA",
                            "Duration": "01:05",
                            "BookingClassAvails": [
                                {
                                    "FareBasisCodes": "YOW",
                                    "ResBookDesigCode": "Y",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "AOW",
                                    "ResBookDesigCode": "A",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "GOW",
                                    "ResBookDesigCode": "G",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "WOW",
                                    "ResBookDesigCode": "W",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 2670680
                                },
                                {
                                    "FareBasisCodes": "SOW",
                                    "ResBookDesigCode": "S",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "BOW",
                                    "ResBookDesigCode": "B",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "HOW",
                                    "ResBookDesigCode": "H",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "KOW",
                                    "ResBookDesigCode": "K",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "LOW",
                                    "ResBookDesigCode": "L",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 1270630
                                },
                                {
                                    "FareBasisCodes": "MOW",
                                    "ResBookDesigCode": "M",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 681630
                                },
                                {
                                    "FareBasisCodes": "NOW",
                                    "ResBookDesigCode": "N",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "QOW",
                                    "ResBookDesigCode": "Q",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "TOW",
                                    "ResBookDesigCode": "T",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "VOW",
                                    "ResBookDesigCode": "V",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "XOW",
                                    "ResBookDesigCode": "X",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                }
                            ]
                        },
                        {
                            "Id": 10,
                            "FlightSegmentDepartureDateTime": "2023-01-23T13:05:00",
                            "FlightSegmentArrivalDateTime": "2023-01-23T14:10:00",
                            "FlightSegmentStopQuantity": 0,
                            "FlightSegmentRPH": "0",
                            "FlightSegmentFlightNumber": "924",
                            "DepartureAirport": "CGK",
                            "ArrivalAirport": "PLM",
                            "OperatingAirlineCode": "IU",
                            "OperatingAirlineCompanyShortName": "Operated by Super Air Jet ",
                            "OperatingAirlineCodeContext": "IATA",
                            "OperatingAirlineFlightNumber": "924",
                            "Equipment": "320",
                            "MarketingAirlineCode": "IU",
                            "MarketingAirlineCodeContext": "IATA",
                            "Duration": "01:05",
                            "BookingClassAvails": [
                                {
                                    "FareBasisCodes": "YIUOW",
                                    "ResBookDesigCode": "Y",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "AIUOW",
                                    "ResBookDesigCode": "A",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "GIUOW",
                                    "ResBookDesigCode": "G",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "WIUOW",
                                    "ResBookDesigCode": "W",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "SIUOW",
                                    "ResBookDesigCode": "S",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "BIUOW",
                                    "ResBookDesigCode": "B",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "HIUOW",
                                    "ResBookDesigCode": "H",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "KIUOW",
                                    "ResBookDesigCode": "K",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 741650
                                },
                                {
                                    "FareBasisCodes": "LIUOW",
                                    "ResBookDesigCode": "L",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "MIUOW",
                                    "ResBookDesigCode": "M",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "NIUOW",
                                    "ResBookDesigCode": "N",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "QIUOW",
                                    "ResBookDesigCode": "Q",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 582950
                                },
                                {
                                    "FareBasisCodes": "TIUOW",
                                    "ResBookDesigCode": "T",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 543050
                                },
                                {
                                    "FareBasisCodes": "VIUOW",
                                    "ResBookDesigCode": "V",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "XIUOW",
                                    "ResBookDesigCode": "X",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                }
                            ]
                        },
                        {
                            "Id": 11,
                            "FlightSegmentDepartureDateTime": "2023-01-23T15:10:00",
                            "FlightSegmentArrivalDateTime": "2023-01-23T16:15:00",
                            "FlightSegmentStopQuantity": 0,
                            "FlightSegmentRPH": "0",
                            "FlightSegmentFlightNumber": "330",
                            "DepartureAirport": "CGK",
                            "ArrivalAirport": "PLM",
                            "OperatingAirlineCode": "JT",
                            "OperatingAirlineCompanyShortName": "Operated by Lion Air ",
                            "OperatingAirlineCodeContext": "IATA",
                            "OperatingAirlineFlightNumber": "330",
                            "Equipment": "737-900ER",
                            "MarketingAirlineCode": "JT",
                            "MarketingAirlineCodeContext": "IATA",
                            "Duration": "01:05",
                            "BookingClassAvails": [
                                {
                                    "FareBasisCodes": "YOW",
                                    "ResBookDesigCode": "Y",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "AOW",
                                    "ResBookDesigCode": "A",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "GOW",
                                    "ResBookDesigCode": "G",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "WOW",
                                    "ResBookDesigCode": "W",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 2670680
                                },
                                {
                                    "FareBasisCodes": "SOW",
                                    "ResBookDesigCode": "S",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "BOW",
                                    "ResBookDesigCode": "B",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "HOW",
                                    "ResBookDesigCode": "H",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "KOW",
                                    "ResBookDesigCode": "K",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "LOW",
                                    "ResBookDesigCode": "L",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 1270630
                                },
                                {
                                    "FareBasisCodes": "MOW",
                                    "ResBookDesigCode": "M",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 681630
                                },
                                {
                                    "FareBasisCodes": "NOW",
                                    "ResBookDesigCode": "N",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "QOW",
                                    "ResBookDesigCode": "Q",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "TOW",
                                    "ResBookDesigCode": "T",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "VOW",
                                    "ResBookDesigCode": "V",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "XOW",
                                    "ResBookDesigCode": "X",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                }
                            ]
                        },
                        {
                            "Id": 12,
                            "FlightSegmentDepartureDateTime": "2023-01-23T15:45:00",
                            "FlightSegmentArrivalDateTime": "2023-01-23T16:50:00",
                            "FlightSegmentStopQuantity": 0,
                            "FlightSegmentRPH": "0",
                            "FlightSegmentFlightNumber": "872",
                            "DepartureAirport": "CGK",
                            "ArrivalAirport": "PLM",
                            "OperatingAirlineCode": "IU",
                            "OperatingAirlineCompanyShortName": "Operated by Super Air Jet ",
                            "OperatingAirlineCodeContext": "IATA",
                            "OperatingAirlineFlightNumber": "872",
                            "Equipment": "320",
                            "MarketingAirlineCode": "IU",
                            "MarketingAirlineCodeContext": "IATA",
                            "Duration": "01:05",
                            "BookingClassAvails": [
                                {
                                    "FareBasisCodes": "YIUOW",
                                    "ResBookDesigCode": "Y",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "AIUOW",
                                    "ResBookDesigCode": "A",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "GIUOW",
                                    "ResBookDesigCode": "G",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "WIUOW",
                                    "ResBookDesigCode": "W",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "SIUOW",
                                    "ResBookDesigCode": "S",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "BIUOW",
                                    "ResBookDesigCode": "B",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "HIUOW",
                                    "ResBookDesigCode": "H",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "KIUOW",
                                    "ResBookDesigCode": "K",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 741650
                                },
                                {
                                    "FareBasisCodes": "LIUOW",
                                    "ResBookDesigCode": "L",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "MIUOW",
                                    "ResBookDesigCode": "M",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "NIUOW",
                                    "ResBookDesigCode": "N",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "QIUOW",
                                    "ResBookDesigCode": "Q",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 582950
                                },
                                {
                                    "FareBasisCodes": "TIUOW",
                                    "ResBookDesigCode": "T",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 543050
                                },
                                {
                                    "FareBasisCodes": "VIUOW",
                                    "ResBookDesigCode": "V",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "XIUOW",
                                    "ResBookDesigCode": "X",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                }
                            ]
                        },
                        {
                            "Id": 13,
                            "FlightSegmentDepartureDateTime": "2023-01-23T16:35:00",
                            "FlightSegmentArrivalDateTime": "2023-01-23T17:40:00",
                            "FlightSegmentStopQuantity": 0,
                            "FlightSegmentRPH": "0",
                            "FlightSegmentFlightNumber": "336",
                            "DepartureAirport": "CGK",
                            "ArrivalAirport": "PLM",
                            "OperatingAirlineCode": "JT",
                            "OperatingAirlineCompanyShortName": "Operated by Lion Air ",
                            "OperatingAirlineCodeContext": "IATA",
                            "OperatingAirlineFlightNumber": "336",
                            "Equipment": "737-800",
                            "MarketingAirlineCode": "JT",
                            "MarketingAirlineCodeContext": "IATA",
                            "Duration": "01:05",
                            "BookingClassAvails": [
                                {
                                    "FareBasisCodes": "YOW",
                                    "ResBookDesigCode": "Y",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "AOW",
                                    "ResBookDesigCode": "A",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "GOW",
                                    "ResBookDesigCode": "G",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "WOW",
                                    "ResBookDesigCode": "W",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 2670680
                                },
                                {
                                    "FareBasisCodes": "SOW",
                                    "ResBookDesigCode": "S",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "BOW",
                                    "ResBookDesigCode": "B",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "HOW",
                                    "ResBookDesigCode": "H",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "KOW",
                                    "ResBookDesigCode": "K",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "LOW",
                                    "ResBookDesigCode": "L",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 1270630
                                },
                                {
                                    "FareBasisCodes": "MOW",
                                    "ResBookDesigCode": "M",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 681630
                                },
                                {
                                    "FareBasisCodes": "NOW",
                                    "ResBookDesigCode": "N",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "QOW",
                                    "ResBookDesigCode": "Q",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "TOW",
                                    "ResBookDesigCode": "T",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "VOW",
                                    "ResBookDesigCode": "V",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "XOW",
                                    "ResBookDesigCode": "X",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                }
                            ]
                        },
                        {
                            "Id": 14,
                            "FlightSegmentDepartureDateTime": "2023-01-23T17:30:00",
                            "FlightSegmentArrivalDateTime": "2023-01-23T18:35:00",
                            "FlightSegmentStopQuantity": 0,
                            "FlightSegmentRPH": "0",
                            "FlightSegmentFlightNumber": "6876",
                            "DepartureAirport": "CGK",
                            "ArrivalAirport": "PLM",
                            "OperatingAirlineCode": "ID",
                            "OperatingAirlineCompanyShortName": "Operated by Batik Air ",
                            "OperatingAirlineCodeContext": "IATA",
                            "OperatingAirlineFlightNumber": "6876",
                            "Equipment": "737-800",
                            "MarketingAirlineCode": "ID",
                            "MarketingAirlineCodeContext": "IATA",
                            "Duration": "01:05",
                            "BookingClassAvails": [
                                {
                                    "FareBasisCodes": "CIDOW",
                                    "ResBookDesigCode": "C",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "DIDOW",
                                    "ResBookDesigCode": "D",
                                    "ResBookDesigQuantity": 4,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "IIDOW",
                                    "ResBookDesigCode": "I",
                                    "ResBookDesigQuantity": 2,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 1670680
                                },
                                {
                                    "FareBasisCodes": "ZIDOW",
                                    "ResBookDesigCode": "Z",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "YIDOW",
                                    "ResBookDesigCode": "Y",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "AIDOW",
                                    "ResBookDesigCode": "A",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "GIDOW",
                                    "ResBookDesigCode": "G",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "WIDOW",
                                    "ResBookDesigCode": "W",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "SIDOW",
                                    "ResBookDesigCode": "S",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 2802180
                                },
                                {
                                    "FareBasisCodes": "BIDOW",
                                    "ResBookDesigCode": "B",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "HIDOW",
                                    "ResBookDesigCode": "H",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "KIDOW",
                                    "ResBookDesigCode": "K",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 1448430
                                },
                                {
                                    "FareBasisCodes": "LIDOW",
                                    "ResBookDesigCode": "L",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 778300
                                },
                                {
                                    "FareBasisCodes": "MIDOW",
                                    "ResBookDesigCode": "M",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 781580
                                },
                                {
                                    "FareBasisCodes": "NIDOW",
                                    "ResBookDesigCode": "N",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "QIDOW",
                                    "ResBookDesigCode": "Q",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "TIDOW",
                                    "ResBookDesigCode": "T",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "VIDOW",
                                    "ResBookDesigCode": "V",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "XIDOW",
                                    "ResBookDesigCode": "X",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                }
                            ]
                        },
                        {
                            "Id": 15,
                            "FlightSegmentDepartureDateTime": "2023-01-23T18:40:00",
                            "FlightSegmentArrivalDateTime": "2023-01-23T19:45:00",
                            "FlightSegmentStopQuantity": 0,
                            "FlightSegmentRPH": "0",
                            "FlightSegmentFlightNumber": "342",
                            "DepartureAirport": "CGK",
                            "ArrivalAirport": "PLM",
                            "OperatingAirlineCode": "JT",
                            "OperatingAirlineCompanyShortName": "Operated by Lion Air ",
                            "OperatingAirlineCodeContext": "IATA",
                            "OperatingAirlineFlightNumber": "342",
                            "Equipment": "737-800",
                            "MarketingAirlineCode": "JT",
                            "MarketingAirlineCodeContext": "IATA",
                            "Duration": "01:05",
                            "BookingClassAvails": [
                                {
                                    "FareBasisCodes": "YOW",
                                    "ResBookDesigCode": "Y",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "AOW",
                                    "ResBookDesigCode": "A",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "GOW",
                                    "ResBookDesigCode": "G",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "WOW",
                                    "ResBookDesigCode": "W",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 2670680
                                },
                                {
                                    "FareBasisCodes": "SOW",
                                    "ResBookDesigCode": "S",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "BOW",
                                    "ResBookDesigCode": "B",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "HOW",
                                    "ResBookDesigCode": "H",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "KOW",
                                    "ResBookDesigCode": "K",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "LOW",
                                    "ResBookDesigCode": "L",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 1270630
                                },
                                {
                                    "FareBasisCodes": "MOW",
                                    "ResBookDesigCode": "M",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 681630
                                },
                                {
                                    "FareBasisCodes": "NOW",
                                    "ResBookDesigCode": "N",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "QOW",
                                    "ResBookDesigCode": "Q",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "TOW",
                                    "ResBookDesigCode": "T",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "VOW",
                                    "ResBookDesigCode": "V",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "XOW",
                                    "ResBookDesigCode": "X",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                }
                            ]
                        },
                        {
                            "Id": 16,
                            "FlightSegmentDepartureDateTime": "2023-01-23T16:35:00",
                            "FlightSegmentArrivalDateTime": "2023-01-23T17:45:00",
                            "FlightSegmentStopQuantity": 0,
                            "FlightSegmentRPH": "0",
                            "FlightSegmentFlightNumber": "7059",
                            "DepartureAirport": "HLP",
                            "ArrivalAirport": "PLM",
                            "OperatingAirlineCode": "ID",
                            "OperatingAirlineCompanyShortName": "Operated by Batik Air ",
                            "OperatingAirlineCodeContext": "IATA",
                            "OperatingAirlineFlightNumber": "7059",
                            "Equipment": "737-800",
                            "MarketingAirlineCode": "ID",
                            "MarketingAirlineCodeContext": "IATA",
                            "Duration": "01:10",
                            "BookingClassAvails": [
                                {
                                    "FareBasisCodes": "CIDOW",
                                    "ResBookDesigCode": "C",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "DIDOW",
                                    "ResBookDesigCode": "D",
                                    "ResBookDesigQuantity": 4,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "IIDOW",
                                    "ResBookDesigCode": "I",
                                    "ResBookDesigQuantity": 2,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 1670680
                                },
                                {
                                    "FareBasisCodes": "ZIDOW",
                                    "ResBookDesigCode": "Z",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "YIDOW",
                                    "ResBookDesigCode": "Y",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "AIDOW",
                                    "ResBookDesigCode": "A",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "GIDOW",
                                    "ResBookDesigCode": "G",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "WIDOW",
                                    "ResBookDesigCode": "W",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "SIDOW",
                                    "ResBookDesigCode": "S",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 2802180
                                },
                                {
                                    "FareBasisCodes": "BIDOW",
                                    "ResBookDesigCode": "B",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "HIDOW",
                                    "ResBookDesigCode": "H",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "KIDOW",
                                    "ResBookDesigCode": "K",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 1448430
                                },
                                {
                                    "FareBasisCodes": "LIDOW",
                                    "ResBookDesigCode": "L",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 778300
                                },
                                {
                                    "FareBasisCodes": "MIDOW",
                                    "ResBookDesigCode": "M",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 781580
                                },
                                {
                                    "FareBasisCodes": "NIDOW",
                                    "ResBookDesigCode": "N",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "QIDOW",
                                    "ResBookDesigCode": "Q",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "TIDOW",
                                    "ResBookDesigCode": "T",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "VIDOW",
                                    "ResBookDesigCode": "V",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "XIDOW",
                                    "ResBookDesigCode": "X",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "RIDOW",
                                    "ResBookDesigCode": "R",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                }
                            ]
                        },
                        {
                            "Id": 17,
                            "FlightSegmentDepartureDateTime": "2023-01-23T03:40:00",
                            "FlightSegmentArrivalDateTime": "2023-01-23T05:10:00",
                            "FlightSegmentStopQuantity": 0,
                            "FlightSegmentRPH": "0",
                            "FlightSegmentFlightNumber": "690",
                            "DepartureAirport": "CGK",
                            "ArrivalAirport": "SUB",
                            "OperatingAirlineCode": "JT",
                            "OperatingAirlineCompanyShortName": "Operated by Lion Air ",
                            "OperatingAirlineCodeContext": "IATA",
                            "OperatingAirlineFlightNumber": "690",
                            "Equipment": "737-800",
                            "MarketingAirlineCode": "JT",
                            "MarketingAirlineCodeContext": "IATA",
                            "Duration": "01:30",
                            "BookingClassAvails": [
                                {
                                    "FareBasisCodes": "YOW",
                                    "ResBookDesigCode": "Y",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "AOW",
                                    "ResBookDesigCode": "A",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "GOW",
                                    "ResBookDesigCode": "G",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "WOW",
                                    "ResBookDesigCode": "W",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 2670680
                                },
                                {
                                    "FareBasisCodes": "SOW",
                                    "ResBookDesigCode": "S",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "BOW",
                                    "ResBookDesigCode": "B",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "HOW",
                                    "ResBookDesigCode": "H",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "KOW",
                                    "ResBookDesigCode": "K",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "LOW",
                                    "ResBookDesigCode": "L",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 1270630
                                },
                                {
                                    "FareBasisCodes": "MOW",
                                    "ResBookDesigCode": "M",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 681630
                                },
                                {
                                    "FareBasisCodes": "NOW",
                                    "ResBookDesigCode": "N",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "QOW",
                                    "ResBookDesigCode": "Q",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "TOW",
                                    "ResBookDesigCode": "T",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "VOW",
                                    "ResBookDesigCode": "V",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "XOW",
                                    "ResBookDesigCode": "X",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                }
                            ]
                        },
                        {
                            "Id": 18,
                            "FlightSegmentDepartureDateTime": "2023-01-23T10:00:00",
                            "FlightSegmentArrivalDateTime": "2023-01-23T11:50:00",
                            "FlightSegmentStopQuantity": 0,
                            "FlightSegmentRPH": "1",
                            "FlightSegmentFlightNumber": "856",
                            "DepartureAirport": "SUB",
                            "ArrivalAirport": "PLM",
                            "OperatingAirlineCode": "JT",
                            "OperatingAirlineCompanyShortName": "Operated by Lion Air ",
                            "OperatingAirlineCodeContext": "IATA",
                            "OperatingAirlineFlightNumber": "856",
                            "Equipment": "737-800",
                            "MarketingAirlineCode": "JT",
                            "MarketingAirlineCodeContext": "IATA",
                            "Duration": "01:50",
                            "BookingClassAvails": [
                                {
                                    "FareBasisCodes": "YOW",
                                    "ResBookDesigCode": "Y",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "AOW",
                                    "ResBookDesigCode": "A",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "GOW",
                                    "ResBookDesigCode": "G",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "WOW",
                                    "ResBookDesigCode": "W",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 2670680
                                },
                                {
                                    "FareBasisCodes": "SOW",
                                    "ResBookDesigCode": "S",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "BOW",
                                    "ResBookDesigCode": "B",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "HOW",
                                    "ResBookDesigCode": "H",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "KOW",
                                    "ResBookDesigCode": "K",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "LOW",
                                    "ResBookDesigCode": "L",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 1270630
                                },
                                {
                                    "FareBasisCodes": "MOW",
                                    "ResBookDesigCode": "M",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 681630
                                },
                                {
                                    "FareBasisCodes": "NOW",
                                    "ResBookDesigCode": "N",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "QOW",
                                    "ResBookDesigCode": "Q",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "TOW",
                                    "ResBookDesigCode": "T",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "VOW",
                                    "ResBookDesigCode": "V",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "XOW",
                                    "ResBookDesigCode": "X",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                }
                            ]
                        },
                        {
                            "Id": 19,
                            "FlightSegmentDepartureDateTime": "2023-01-23T05:30:00",
                            "FlightSegmentArrivalDateTime": "2023-01-23T07:00:00",
                            "FlightSegmentStopQuantity": 0,
                            "FlightSegmentRPH": "0",
                            "FlightSegmentFlightNumber": "748",
                            "DepartureAirport": "CGK",
                            "ArrivalAirport": "SUB",
                            "OperatingAirlineCode": "JT",
                            "OperatingAirlineCompanyShortName": "Operated by Lion Air ",
                            "OperatingAirlineCodeContext": "IATA",
                            "OperatingAirlineFlightNumber": "748",
                            "Equipment": "737-800",
                            "MarketingAirlineCode": "JT",
                            "MarketingAirlineCodeContext": "IATA",
                            "Duration": "01:30",
                            "BookingClassAvails": [
                                {
                                    "FareBasisCodes": "YOW",
                                    "ResBookDesigCode": "Y",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "AOW",
                                    "ResBookDesigCode": "A",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "GOW",
                                    "ResBookDesigCode": "G",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "WOW",
                                    "ResBookDesigCode": "W",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 2670680
                                },
                                {
                                    "FareBasisCodes": "SOW",
                                    "ResBookDesigCode": "S",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "BOW",
                                    "ResBookDesigCode": "B",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "HOW",
                                    "ResBookDesigCode": "H",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "KOW",
                                    "ResBookDesigCode": "K",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "LOW",
                                    "ResBookDesigCode": "L",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 1270630
                                },
                                {
                                    "FareBasisCodes": "MOW",
                                    "ResBookDesigCode": "M",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 681630
                                },
                                {
                                    "FareBasisCodes": "NOW",
                                    "ResBookDesigCode": "N",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "QOW",
                                    "ResBookDesigCode": "Q",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "TOW",
                                    "ResBookDesigCode": "T",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "VOW",
                                    "ResBookDesigCode": "V",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "XOW",
                                    "ResBookDesigCode": "X",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                }
                            ]
                        },
                        {
                            "Id": 20,
                            "FlightSegmentDepartureDateTime": "2023-01-23T10:00:00",
                            "FlightSegmentArrivalDateTime": "2023-01-23T11:50:00",
                            "FlightSegmentStopQuantity": 0,
                            "FlightSegmentRPH": "1",
                            "FlightSegmentFlightNumber": "856",
                            "DepartureAirport": "SUB",
                            "ArrivalAirport": "PLM",
                            "OperatingAirlineCode": "JT",
                            "OperatingAirlineCompanyShortName": "Operated by Lion Air ",
                            "OperatingAirlineCodeContext": "IATA",
                            "OperatingAirlineFlightNumber": "856",
                            "Equipment": "737-800",
                            "MarketingAirlineCode": "JT",
                            "MarketingAirlineCodeContext": "IATA",
                            "Duration": "01:50",
                            "BookingClassAvails": [
                                {
                                    "FareBasisCodes": "YOW",
                                    "ResBookDesigCode": "Y",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "AOW",
                                    "ResBookDesigCode": "A",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "GOW",
                                    "ResBookDesigCode": "G",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "WOW",
                                    "ResBookDesigCode": "W",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 2670680
                                },
                                {
                                    "FareBasisCodes": "SOW",
                                    "ResBookDesigCode": "S",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "BOW",
                                    "ResBookDesigCode": "B",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "HOW",
                                    "ResBookDesigCode": "H",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "KOW",
                                    "ResBookDesigCode": "K",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "LOW",
                                    "ResBookDesigCode": "L",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 1270630
                                },
                                {
                                    "FareBasisCodes": "MOW",
                                    "ResBookDesigCode": "M",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 681630
                                },
                                {
                                    "FareBasisCodes": "NOW",
                                    "ResBookDesigCode": "N",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "QOW",
                                    "ResBookDesigCode": "Q",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "TOW",
                                    "ResBookDesigCode": "T",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "VOW",
                                    "ResBookDesigCode": "V",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "XOW",
                                    "ResBookDesigCode": "X",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                }
                            ]
                        },
                        {
                            "Id": 21,
                            "FlightSegmentDepartureDateTime": "2023-01-23T03:40:00",
                            "FlightSegmentArrivalDateTime": "2023-01-23T05:10:00",
                            "FlightSegmentStopQuantity": 0,
                            "FlightSegmentRPH": "0",
                            "FlightSegmentFlightNumber": "810",
                            "DepartureAirport": "CGK",
                            "ArrivalAirport": "SUB",
                            "OperatingAirlineCode": "JT",
                            "OperatingAirlineCompanyShortName": "Operated by Lion Air ",
                            "OperatingAirlineCodeContext": "IATA",
                            "OperatingAirlineFlightNumber": "810",
                            "Equipment": "737-900ER",
                            "MarketingAirlineCode": "JT",
                            "MarketingAirlineCodeContext": "IATA",
                            "Duration": "01:30",
                            "BookingClassAvails": [
                                {
                                    "FareBasisCodes": "YOW",
                                    "ResBookDesigCode": "Y",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "AOW",
                                    "ResBookDesigCode": "A",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "GOW",
                                    "ResBookDesigCode": "G",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "WOW",
                                    "ResBookDesigCode": "W",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 2670680
                                },
                                {
                                    "FareBasisCodes": "SOW",
                                    "ResBookDesigCode": "S",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "BOW",
                                    "ResBookDesigCode": "B",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "HOW",
                                    "ResBookDesigCode": "H",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "KOW",
                                    "ResBookDesigCode": "K",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "LOW",
                                    "ResBookDesigCode": "L",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 1270630
                                },
                                {
                                    "FareBasisCodes": "MOW",
                                    "ResBookDesigCode": "M",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 681630
                                },
                                {
                                    "FareBasisCodes": "NOW",
                                    "ResBookDesigCode": "N",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "QOW",
                                    "ResBookDesigCode": "Q",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "TOW",
                                    "ResBookDesigCode": "T",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "VOW",
                                    "ResBookDesigCode": "V",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "XOW",
                                    "ResBookDesigCode": "X",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                }
                            ]
                        },
                        {
                            "Id": 22,
                            "FlightSegmentDepartureDateTime": "2023-01-23T10:00:00",
                            "FlightSegmentArrivalDateTime": "2023-01-23T11:50:00",
                            "FlightSegmentStopQuantity": 0,
                            "FlightSegmentRPH": "1",
                            "FlightSegmentFlightNumber": "856",
                            "DepartureAirport": "SUB",
                            "ArrivalAirport": "PLM",
                            "OperatingAirlineCode": "JT",
                            "OperatingAirlineCompanyShortName": "Operated by Lion Air ",
                            "OperatingAirlineCodeContext": "IATA",
                            "OperatingAirlineFlightNumber": "856",
                            "Equipment": "737-800",
                            "MarketingAirlineCode": "JT",
                            "MarketingAirlineCodeContext": "IATA",
                            "Duration": "01:50",
                            "BookingClassAvails": [
                                {
                                    "FareBasisCodes": "YOW",
                                    "ResBookDesigCode": "Y",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "AOW",
                                    "ResBookDesigCode": "A",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "GOW",
                                    "ResBookDesigCode": "G",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "WOW",
                                    "ResBookDesigCode": "W",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 2670680
                                },
                                {
                                    "FareBasisCodes": "SOW",
                                    "ResBookDesigCode": "S",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "BOW",
                                    "ResBookDesigCode": "B",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "HOW",
                                    "ResBookDesigCode": "H",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "KOW",
                                    "ResBookDesigCode": "K",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "LOW",
                                    "ResBookDesigCode": "L",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 1270630
                                },
                                {
                                    "FareBasisCodes": "MOW",
                                    "ResBookDesigCode": "M",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 681630
                                },
                                {
                                    "FareBasisCodes": "NOW",
                                    "ResBookDesigCode": "N",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "QOW",
                                    "ResBookDesigCode": "Q",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "TOW",
                                    "ResBookDesigCode": "T",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "VOW",
                                    "ResBookDesigCode": "V",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "XOW",
                                    "ResBookDesigCode": "X",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                }
                            ]
                        },
                        {
                            "Id": 23,
                            "FlightSegmentDepartureDateTime": "2023-01-23T07:00:00",
                            "FlightSegmentArrivalDateTime": "2023-01-23T08:30:00",
                            "FlightSegmentStopQuantity": 0,
                            "FlightSegmentRPH": "0",
                            "FlightSegmentFlightNumber": "6308",
                            "DepartureAirport": "CGK",
                            "ArrivalAirport": "SUB",
                            "OperatingAirlineCode": "ID",
                            "OperatingAirlineCompanyShortName": "Operated by Batik Air ",
                            "OperatingAirlineCodeContext": "IATA",
                            "OperatingAirlineFlightNumber": "6308",
                            "Equipment": "32A",
                            "MarketingAirlineCode": "ID",
                            "MarketingAirlineCodeContext": "IATA",
                            "Duration": "01:30",
                            "BookingClassAvails": [
                                {
                                    "FareBasisCodes": "COW",
                                    "ResBookDesigCode": "C",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "DOW",
                                    "ResBookDesigCode": "D",
                                    "ResBookDesigQuantity": 4,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "IOW",
                                    "ResBookDesigCode": "I",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "ZOW",
                                    "ResBookDesigCode": "Z",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "YOW",
                                    "ResBookDesigCode": "Y",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "AOW",
                                    "ResBookDesigCode": "A",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "GOW",
                                    "ResBookDesigCode": "G",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "WOW",
                                    "ResBookDesigCode": "W",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 2670680
                                },
                                {
                                    "FareBasisCodes": "SOW",
                                    "ResBookDesigCode": "S",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "BOW",
                                    "ResBookDesigCode": "B",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "HOW",
                                    "ResBookDesigCode": "H",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "KOW",
                                    "ResBookDesigCode": "K",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "LOW",
                                    "ResBookDesigCode": "L",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 1270630
                                },
                                {
                                    "FareBasisCodes": "MOW",
                                    "ResBookDesigCode": "M",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 681630
                                },
                                {
                                    "FareBasisCodes": "NOW",
                                    "ResBookDesigCode": "N",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "QOW",
                                    "ResBookDesigCode": "Q",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "TOW",
                                    "ResBookDesigCode": "T",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "VOW",
                                    "ResBookDesigCode": "V",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "XOW",
                                    "ResBookDesigCode": "X",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                }
                            ]
                        },
                        {
                            "Id": 24,
                            "FlightSegmentDepartureDateTime": "2023-01-23T10:00:00",
                            "FlightSegmentArrivalDateTime": "2023-01-23T11:50:00",
                            "FlightSegmentStopQuantity": 0,
                            "FlightSegmentRPH": "1",
                            "FlightSegmentFlightNumber": "856",
                            "DepartureAirport": "SUB",
                            "ArrivalAirport": "PLM",
                            "OperatingAirlineCode": "JT",
                            "OperatingAirlineCompanyShortName": "Operated by Lion Air ",
                            "OperatingAirlineCodeContext": "IATA",
                            "OperatingAirlineFlightNumber": "856",
                            "Equipment": "737-800",
                            "MarketingAirlineCode": "JT",
                            "MarketingAirlineCodeContext": "IATA",
                            "Duration": "01:50",
                            "BookingClassAvails": [
                                {
                                    "FareBasisCodes": "YOW",
                                    "ResBookDesigCode": "Y",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "AOW",
                                    "ResBookDesigCode": "A",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "GOW",
                                    "ResBookDesigCode": "G",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "WOW",
                                    "ResBookDesigCode": "W",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 2670680
                                },
                                {
                                    "FareBasisCodes": "SOW",
                                    "ResBookDesigCode": "S",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "BOW",
                                    "ResBookDesigCode": "B",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "HOW",
                                    "ResBookDesigCode": "H",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "KOW",
                                    "ResBookDesigCode": "K",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "LOW",
                                    "ResBookDesigCode": "L",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 1270630
                                },
                                {
                                    "FareBasisCodes": "MOW",
                                    "ResBookDesigCode": "M",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 681630
                                },
                                {
                                    "FareBasisCodes": "NOW",
                                    "ResBookDesigCode": "N",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "QOW",
                                    "ResBookDesigCode": "Q",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "TOW",
                                    "ResBookDesigCode": "T",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "VOW",
                                    "ResBookDesigCode": "V",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "XOW",
                                    "ResBookDesigCode": "X",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                }
                            ]
                        },
                        {
                            "Id": 25,
                            "FlightSegmentDepartureDateTime": "2023-01-23T05:00:00",
                            "FlightSegmentArrivalDateTime": "2023-01-23T06:30:00",
                            "FlightSegmentStopQuantity": 0,
                            "FlightSegmentRPH": "0",
                            "FlightSegmentFlightNumber": "6370",
                            "DepartureAirport": "CGK",
                            "ArrivalAirport": "SUB",
                            "OperatingAirlineCode": "ID",
                            "OperatingAirlineCompanyShortName": "Operated by Batik Air ",
                            "OperatingAirlineCodeContext": "IATA",
                            "OperatingAirlineFlightNumber": "6370",
                            "Equipment": "737-800",
                            "MarketingAirlineCode": "ID",
                            "MarketingAirlineCodeContext": "IATA",
                            "Duration": "01:30",
                            "BookingClassAvails": [
                                {
                                    "FareBasisCodes": "COW",
                                    "ResBookDesigCode": "C",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "DOW",
                                    "ResBookDesigCode": "D",
                                    "ResBookDesigQuantity": 4,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "IOW",
                                    "ResBookDesigCode": "I",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "ZOW",
                                    "ResBookDesigCode": "Z",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "YOW",
                                    "ResBookDesigCode": "Y",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "AOW",
                                    "ResBookDesigCode": "A",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "GOW",
                                    "ResBookDesigCode": "G",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "WOW",
                                    "ResBookDesigCode": "W",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 2670680
                                },
                                {
                                    "FareBasisCodes": "SOW",
                                    "ResBookDesigCode": "S",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "BOW",
                                    "ResBookDesigCode": "B",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "HOW",
                                    "ResBookDesigCode": "H",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "KOW",
                                    "ResBookDesigCode": "K",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "LOW",
                                    "ResBookDesigCode": "L",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 1270630
                                },
                                {
                                    "FareBasisCodes": "MOW",
                                    "ResBookDesigCode": "M",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 681630
                                },
                                {
                                    "FareBasisCodes": "NOW",
                                    "ResBookDesigCode": "N",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "QOW",
                                    "ResBookDesigCode": "Q",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "TOW",
                                    "ResBookDesigCode": "T",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "VOW",
                                    "ResBookDesigCode": "V",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "XOW",
                                    "ResBookDesigCode": "X",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                }
                            ]
                        },
                        {
                            "Id": 26,
                            "FlightSegmentDepartureDateTime": "2023-01-23T10:00:00",
                            "FlightSegmentArrivalDateTime": "2023-01-23T11:50:00",
                            "FlightSegmentStopQuantity": 0,
                            "FlightSegmentRPH": "1",
                            "FlightSegmentFlightNumber": "856",
                            "DepartureAirport": "SUB",
                            "ArrivalAirport": "PLM",
                            "OperatingAirlineCode": "JT",
                            "OperatingAirlineCompanyShortName": "Operated by Lion Air ",
                            "OperatingAirlineCodeContext": "IATA",
                            "OperatingAirlineFlightNumber": "856",
                            "Equipment": "737-800",
                            "MarketingAirlineCode": "JT",
                            "MarketingAirlineCodeContext": "IATA",
                            "Duration": "01:50",
                            "BookingClassAvails": [
                                {
                                    "FareBasisCodes": "YOW",
                                    "ResBookDesigCode": "Y",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "AOW",
                                    "ResBookDesigCode": "A",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "GOW",
                                    "ResBookDesigCode": "G",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "WOW",
                                    "ResBookDesigCode": "W",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 2670680
                                },
                                {
                                    "FareBasisCodes": "SOW",
                                    "ResBookDesigCode": "S",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "BOW",
                                    "ResBookDesigCode": "B",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "HOW",
                                    "ResBookDesigCode": "H",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "KOW",
                                    "ResBookDesigCode": "K",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "LOW",
                                    "ResBookDesigCode": "L",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 1270630
                                },
                                {
                                    "FareBasisCodes": "MOW",
                                    "ResBookDesigCode": "M",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 681630
                                },
                                {
                                    "FareBasisCodes": "NOW",
                                    "ResBookDesigCode": "N",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "QOW",
                                    "ResBookDesigCode": "Q",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "TOW",
                                    "ResBookDesigCode": "T",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "VOW",
                                    "ResBookDesigCode": "V",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "XOW",
                                    "ResBookDesigCode": "X",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                }
                            ]
                        },
                        {
                            "Id": 27,
                            "FlightSegmentDepartureDateTime": "2023-01-23T06:00:00",
                            "FlightSegmentArrivalDateTime": "2023-01-23T07:30:00",
                            "FlightSegmentStopQuantity": 0,
                            "FlightSegmentRPH": "0",
                            "FlightSegmentFlightNumber": "6572",
                            "DepartureAirport": "CGK",
                            "ArrivalAirport": "SUB",
                            "OperatingAirlineCode": "ID",
                            "OperatingAirlineCompanyShortName": "Operated by Batik Air ",
                            "OperatingAirlineCodeContext": "IATA",
                            "OperatingAirlineFlightNumber": "6572",
                            "Equipment": "737-800",
                            "MarketingAirlineCode": "ID",
                            "MarketingAirlineCodeContext": "IATA",
                            "Duration": "01:30",
                            "BookingClassAvails": [
                                {
                                    "FareBasisCodes": "COW",
                                    "ResBookDesigCode": "C",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "DOW",
                                    "ResBookDesigCode": "D",
                                    "ResBookDesigQuantity": 4,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "IOW",
                                    "ResBookDesigCode": "I",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "ZOW",
                                    "ResBookDesigCode": "Z",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "YOW",
                                    "ResBookDesigCode": "Y",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "AOW",
                                    "ResBookDesigCode": "A",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "GOW",
                                    "ResBookDesigCode": "G",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "WOW",
                                    "ResBookDesigCode": "W",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 2670680
                                },
                                {
                                    "FareBasisCodes": "SOW",
                                    "ResBookDesigCode": "S",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "BOW",
                                    "ResBookDesigCode": "B",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "HOW",
                                    "ResBookDesigCode": "H",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "KOW",
                                    "ResBookDesigCode": "K",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "LOW",
                                    "ResBookDesigCode": "L",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 1270630
                                },
                                {
                                    "FareBasisCodes": "MOW",
                                    "ResBookDesigCode": "M",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 681630
                                },
                                {
                                    "FareBasisCodes": "NOW",
                                    "ResBookDesigCode": "N",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "QOW",
                                    "ResBookDesigCode": "Q",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "TOW",
                                    "ResBookDesigCode": "T",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "VOW",
                                    "ResBookDesigCode": "V",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "XOW",
                                    "ResBookDesigCode": "X",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                }
                            ]
                        },
                        {
                            "Id": 28,
                            "FlightSegmentDepartureDateTime": "2023-01-23T10:00:00",
                            "FlightSegmentArrivalDateTime": "2023-01-23T11:50:00",
                            "FlightSegmentStopQuantity": 0,
                            "FlightSegmentRPH": "1",
                            "FlightSegmentFlightNumber": "856",
                            "DepartureAirport": "SUB",
                            "ArrivalAirport": "PLM",
                            "OperatingAirlineCode": "JT",
                            "OperatingAirlineCompanyShortName": "Operated by Lion Air ",
                            "OperatingAirlineCodeContext": "IATA",
                            "OperatingAirlineFlightNumber": "856",
                            "Equipment": "737-800",
                            "MarketingAirlineCode": "JT",
                            "MarketingAirlineCodeContext": "IATA",
                            "Duration": "01:50",
                            "BookingClassAvails": [
                                {
                                    "FareBasisCodes": "YOW",
                                    "ResBookDesigCode": "Y",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "AOW",
                                    "ResBookDesigCode": "A",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "GOW",
                                    "ResBookDesigCode": "G",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "WOW",
                                    "ResBookDesigCode": "W",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 2670680
                                },
                                {
                                    "FareBasisCodes": "SOW",
                                    "ResBookDesigCode": "S",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "BOW",
                                    "ResBookDesigCode": "B",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "HOW",
                                    "ResBookDesigCode": "H",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "KOW",
                                    "ResBookDesigCode": "K",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "LOW",
                                    "ResBookDesigCode": "L",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 1270630
                                },
                                {
                                    "FareBasisCodes": "MOW",
                                    "ResBookDesigCode": "M",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 681630
                                },
                                {
                                    "FareBasisCodes": "NOW",
                                    "ResBookDesigCode": "N",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "QOW",
                                    "ResBookDesigCode": "Q",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "TOW",
                                    "ResBookDesigCode": "T",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "VOW",
                                    "ResBookDesigCode": "V",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "XOW",
                                    "ResBookDesigCode": "X",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                }
                            ]
                        },
                        {
                            "Id": 29,
                            "FlightSegmentDepartureDateTime": "2023-01-23T07:40:00",
                            "FlightSegmentArrivalDateTime": "2023-01-23T09:10:00",
                            "FlightSegmentStopQuantity": 0,
                            "FlightSegmentRPH": "0",
                            "FlightSegmentFlightNumber": "6584",
                            "DepartureAirport": "CGK",
                            "ArrivalAirport": "SUB",
                            "OperatingAirlineCode": "ID",
                            "OperatingAirlineCompanyShortName": "Operated by Batik Air ",
                            "OperatingAirlineCodeContext": "IATA",
                            "OperatingAirlineFlightNumber": "6584",
                            "Equipment": "32A",
                            "MarketingAirlineCode": "ID",
                            "MarketingAirlineCodeContext": "IATA",
                            "Duration": "01:30",
                            "BookingClassAvails": [
                                {
                                    "FareBasisCodes": "COW",
                                    "ResBookDesigCode": "C",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "DOW",
                                    "ResBookDesigCode": "D",
                                    "ResBookDesigQuantity": 4,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "IOW",
                                    "ResBookDesigCode": "I",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "ZOW",
                                    "ResBookDesigCode": "Z",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "YOW",
                                    "ResBookDesigCode": "Y",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "AOW",
                                    "ResBookDesigCode": "A",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "GOW",
                                    "ResBookDesigCode": "G",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "WOW",
                                    "ResBookDesigCode": "W",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 2670680
                                },
                                {
                                    "FareBasisCodes": "SOW",
                                    "ResBookDesigCode": "S",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "BOW",
                                    "ResBookDesigCode": "B",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "HOW",
                                    "ResBookDesigCode": "H",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "KOW",
                                    "ResBookDesigCode": "K",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "LOW",
                                    "ResBookDesigCode": "L",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 1270630
                                },
                                {
                                    "FareBasisCodes": "MOW",
                                    "ResBookDesigCode": "M",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 681630
                                },
                                {
                                    "FareBasisCodes": "NOW",
                                    "ResBookDesigCode": "N",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "QOW",
                                    "ResBookDesigCode": "Q",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "TOW",
                                    "ResBookDesigCode": "T",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "VOW",
                                    "ResBookDesigCode": "V",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "XOW",
                                    "ResBookDesigCode": "X",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                }
                            ]
                        },
                        {
                            "Id": 30,
                            "FlightSegmentDepartureDateTime": "2023-01-23T10:00:00",
                            "FlightSegmentArrivalDateTime": "2023-01-23T11:50:00",
                            "FlightSegmentStopQuantity": 0,
                            "FlightSegmentRPH": "1",
                            "FlightSegmentFlightNumber": "856",
                            "DepartureAirport": "SUB",
                            "ArrivalAirport": "PLM",
                            "OperatingAirlineCode": "JT",
                            "OperatingAirlineCompanyShortName": "Operated by Lion Air ",
                            "OperatingAirlineCodeContext": "IATA",
                            "OperatingAirlineFlightNumber": "856",
                            "Equipment": "737-800",
                            "MarketingAirlineCode": "JT",
                            "MarketingAirlineCodeContext": "IATA",
                            "Duration": "01:50",
                            "BookingClassAvails": [
                                {
                                    "FareBasisCodes": "YOW",
                                    "ResBookDesigCode": "Y",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "AOW",
                                    "ResBookDesigCode": "A",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "GOW",
                                    "ResBookDesigCode": "G",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "WOW",
                                    "ResBookDesigCode": "W",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 2670680
                                },
                                {
                                    "FareBasisCodes": "SOW",
                                    "ResBookDesigCode": "S",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "BOW",
                                    "ResBookDesigCode": "B",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "HOW",
                                    "ResBookDesigCode": "H",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "KOW",
                                    "ResBookDesigCode": "K",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "LOW",
                                    "ResBookDesigCode": "L",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 1270630
                                },
                                {
                                    "FareBasisCodes": "MOW",
                                    "ResBookDesigCode": "M",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 681630
                                },
                                {
                                    "FareBasisCodes": "NOW",
                                    "ResBookDesigCode": "N",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "QOW",
                                    "ResBookDesigCode": "Q",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "TOW",
                                    "ResBookDesigCode": "T",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "VOW",
                                    "ResBookDesigCode": "V",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "XOW",
                                    "ResBookDesigCode": "X",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                }
                            ]
                        },
                        {
                            "Id": 31,
                            "FlightSegmentDepartureDateTime": "2023-01-23T05:25:00",
                            "FlightSegmentArrivalDateTime": "2023-01-23T07:00:00",
                            "FlightSegmentStopQuantity": 0,
                            "FlightSegmentRPH": "0",
                            "FlightSegmentFlightNumber": "374",
                            "DepartureAirport": "CGK",
                            "ArrivalAirport": "BTH",
                            "OperatingAirlineCode": "JT",
                            "OperatingAirlineCompanyShortName": "Operated by Lion Air ",
                            "OperatingAirlineCodeContext": "IATA",
                            "OperatingAirlineFlightNumber": "374",
                            "Equipment": "737-800",
                            "MarketingAirlineCode": "JT",
                            "MarketingAirlineCodeContext": "IATA",
                            "Duration": "01:35",
                            "BookingClassAvails": [
                                {
                                    "FareBasisCodes": "YIWOW",
                                    "ResBookDesigCode": "Y",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "AIWOW",
                                    "ResBookDesigCode": "A",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "GIWOW",
                                    "ResBookDesigCode": "G",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "WIWOW",
                                    "ResBookDesigCode": "W",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "SIWOW",
                                    "ResBookDesigCode": "S",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "BIWOW",
                                    "ResBookDesigCode": "B",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "HIWOW",
                                    "ResBookDesigCode": "H",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "KIWOW",
                                    "ResBookDesigCode": "K",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "LIWOW",
                                    "ResBookDesigCode": "L",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "MIWOW",
                                    "ResBookDesigCode": "M",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "NIWOW",
                                    "ResBookDesigCode": "N",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "QIWOW",
                                    "ResBookDesigCode": "Q",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "TIWOW",
                                    "ResBookDesigCode": "T",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "VIWOW",
                                    "ResBookDesigCode": "V",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "XIWOW",
                                    "ResBookDesigCode": "X",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                }
                            ]
                        },
                        {
                            "Id": 32,
                            "FlightSegmentDepartureDateTime": "2023-01-23T11:20:00",
                            "FlightSegmentArrivalDateTime": "2023-01-23T12:50:00",
                            "FlightSegmentStopQuantity": 0,
                            "FlightSegmentRPH": "1",
                            "FlightSegmentFlightNumber": "1747",
                            "DepartureAirport": "BTH",
                            "ArrivalAirport": "PLM",
                            "OperatingAirlineCode": "IW",
                            "OperatingAirlineCompanyShortName": "Operated by Wings Air ",
                            "OperatingAirlineCodeContext": "IATA",
                            "OperatingAirlineFlightNumber": "1747",
                            "Equipment": "ATR",
                            "MarketingAirlineCode": "IW",
                            "MarketingAirlineCodeContext": "IATA",
                            "Duration": "01:30",
                            "BookingClassAvails": [
                                {
                                    "FareBasisCodes": "YIWOW",
                                    "ResBookDesigCode": "Y",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "AIWOW",
                                    "ResBookDesigCode": "A",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "GIWOW",
                                    "ResBookDesigCode": "G",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "WIWOW",
                                    "ResBookDesigCode": "W",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "SIWOW",
                                    "ResBookDesigCode": "S",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "BIWOW",
                                    "ResBookDesigCode": "B",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "HIWOW",
                                    "ResBookDesigCode": "H",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "KIWOW",
                                    "ResBookDesigCode": "K",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "LIWOW",
                                    "ResBookDesigCode": "L",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "MIWOW",
                                    "ResBookDesigCode": "M",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "NIWOW",
                                    "ResBookDesigCode": "N",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "QIWOW",
                                    "ResBookDesigCode": "Q",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "TIWOW",
                                    "ResBookDesigCode": "T",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "VIWOW",
                                    "ResBookDesigCode": "V",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "XIWOW",
                                    "ResBookDesigCode": "X",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                }
                            ]
                        },
                        {
                            "Id": 33,
                            "FlightSegmentDepartureDateTime": "2023-01-23T08:00:00",
                            "FlightSegmentArrivalDateTime": "2023-01-23T09:35:00",
                            "FlightSegmentStopQuantity": 0,
                            "FlightSegmentRPH": "0",
                            "FlightSegmentFlightNumber": "900",
                            "DepartureAirport": "CGK",
                            "ArrivalAirport": "BTH",
                            "OperatingAirlineCode": "JT",
                            "OperatingAirlineCompanyShortName": "Operated by Lion Air ",
                            "OperatingAirlineCodeContext": "IATA",
                            "OperatingAirlineFlightNumber": "900",
                            "Equipment": "737-800",
                            "MarketingAirlineCode": "JT",
                            "MarketingAirlineCodeContext": "IATA",
                            "Duration": "01:35",
                            "BookingClassAvails": [
                                {
                                    "FareBasisCodes": "YIWOW",
                                    "ResBookDesigCode": "Y",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "AIWOW",
                                    "ResBookDesigCode": "A",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "GIWOW",
                                    "ResBookDesigCode": "G",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "WIWOW",
                                    "ResBookDesigCode": "W",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "SIWOW",
                                    "ResBookDesigCode": "S",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "BIWOW",
                                    "ResBookDesigCode": "B",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "HIWOW",
                                    "ResBookDesigCode": "H",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "KIWOW",
                                    "ResBookDesigCode": "K",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "LIWOW",
                                    "ResBookDesigCode": "L",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "MIWOW",
                                    "ResBookDesigCode": "M",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "NIWOW",
                                    "ResBookDesigCode": "N",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "QIWOW",
                                    "ResBookDesigCode": "Q",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "TIWOW",
                                    "ResBookDesigCode": "T",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "VIWOW",
                                    "ResBookDesigCode": "V",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "XIWOW",
                                    "ResBookDesigCode": "X",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                }
                            ]
                        },
                        {
                            "Id": 34,
                            "FlightSegmentDepartureDateTime": "2023-01-23T11:20:00",
                            "FlightSegmentArrivalDateTime": "2023-01-23T12:50:00",
                            "FlightSegmentStopQuantity": 0,
                            "FlightSegmentRPH": "1",
                            "FlightSegmentFlightNumber": "1747",
                            "DepartureAirport": "BTH",
                            "ArrivalAirport": "PLM",
                            "OperatingAirlineCode": "IW",
                            "OperatingAirlineCompanyShortName": "Operated by Wings Air ",
                            "OperatingAirlineCodeContext": "IATA",
                            "OperatingAirlineFlightNumber": "1747",
                            "Equipment": "ATR",
                            "MarketingAirlineCode": "IW",
                            "MarketingAirlineCodeContext": "IATA",
                            "Duration": "01:30",
                            "BookingClassAvails": [
                                {
                                    "FareBasisCodes": "YIWOW",
                                    "ResBookDesigCode": "Y",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "AIWOW",
                                    "ResBookDesigCode": "A",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "GIWOW",
                                    "ResBookDesigCode": "G",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "WIWOW",
                                    "ResBookDesigCode": "W",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "SIWOW",
                                    "ResBookDesigCode": "S",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "BIWOW",
                                    "ResBookDesigCode": "B",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "HIWOW",
                                    "ResBookDesigCode": "H",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "KIWOW",
                                    "ResBookDesigCode": "K",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "LIWOW",
                                    "ResBookDesigCode": "L",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "MIWOW",
                                    "ResBookDesigCode": "M",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "NIWOW",
                                    "ResBookDesigCode": "N",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "QIWOW",
                                    "ResBookDesigCode": "Q",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "TIWOW",
                                    "ResBookDesigCode": "T",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "VIWOW",
                                    "ResBookDesigCode": "V",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "XIWOW",
                                    "ResBookDesigCode": "X",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                }
                            ]
                        },
                        {
                            "Id": 35,
                            "FlightSegmentDepartureDateTime": "2023-01-23T06:10:00",
                            "FlightSegmentArrivalDateTime": "2023-01-23T07:45:00",
                            "FlightSegmentStopQuantity": 0,
                            "FlightSegmentRPH": "0",
                            "FlightSegmentFlightNumber": "856",
                            "DepartureAirport": "CGK",
                            "ArrivalAirport": "BTH",
                            "OperatingAirlineCode": "IU",
                            "OperatingAirlineCompanyShortName": "Operated by Super Air Jet ",
                            "OperatingAirlineCodeContext": "IATA",
                            "OperatingAirlineFlightNumber": "856",
                            "Equipment": "320",
                            "MarketingAirlineCode": "IU",
                            "MarketingAirlineCodeContext": "IATA",
                            "Duration": "01:35",
                            "BookingClassAvails": [
                                {
                                    "FareBasisCodes": "YIWOW",
                                    "ResBookDesigCode": "Y",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "AIWOW",
                                    "ResBookDesigCode": "A",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "GIWOW",
                                    "ResBookDesigCode": "G",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "WIWOW",
                                    "ResBookDesigCode": "W",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "SIWOW",
                                    "ResBookDesigCode": "S",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "BIWOW",
                                    "ResBookDesigCode": "B",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "HIWOW",
                                    "ResBookDesigCode": "H",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "KIWOW",
                                    "ResBookDesigCode": "K",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "LIWOW",
                                    "ResBookDesigCode": "L",
                                    "ResBookDesigQuantity": 7,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "MIWOW",
                                    "ResBookDesigCode": "M",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "NIWOW",
                                    "ResBookDesigCode": "N",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "QIWOW",
                                    "ResBookDesigCode": "Q",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "TIWOW",
                                    "ResBookDesigCode": "T",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "VIWOW",
                                    "ResBookDesigCode": "V",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "XIWOW",
                                    "ResBookDesigCode": "X",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                }
                            ]
                        },
                        {
                            "Id": 36,
                            "FlightSegmentDepartureDateTime": "2023-01-23T11:20:00",
                            "FlightSegmentArrivalDateTime": "2023-01-23T12:50:00",
                            "FlightSegmentStopQuantity": 0,
                            "FlightSegmentRPH": "1",
                            "FlightSegmentFlightNumber": "1747",
                            "DepartureAirport": "BTH",
                            "ArrivalAirport": "PLM",
                            "OperatingAirlineCode": "IW",
                            "OperatingAirlineCompanyShortName": "Operated by Wings Air ",
                            "OperatingAirlineCodeContext": "IATA",
                            "OperatingAirlineFlightNumber": "1747",
                            "Equipment": "ATR",
                            "MarketingAirlineCode": "IW",
                            "MarketingAirlineCodeContext": "IATA",
                            "Duration": "01:30",
                            "BookingClassAvails": [
                                {
                                    "FareBasisCodes": "YIWOW",
                                    "ResBookDesigCode": "Y",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "AIWOW",
                                    "ResBookDesigCode": "A",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "GIWOW",
                                    "ResBookDesigCode": "G",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "WIWOW",
                                    "ResBookDesigCode": "W",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "SIWOW",
                                    "ResBookDesigCode": "S",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "BIWOW",
                                    "ResBookDesigCode": "B",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "HIWOW",
                                    "ResBookDesigCode": "H",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "KIWOW",
                                    "ResBookDesigCode": "K",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "LIWOW",
                                    "ResBookDesigCode": "L",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "MIWOW",
                                    "ResBookDesigCode": "M",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "NIWOW",
                                    "ResBookDesigCode": "N",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "QIWOW",
                                    "ResBookDesigCode": "Q",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "TIWOW",
                                    "ResBookDesigCode": "T",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "VIWOW",
                                    "ResBookDesigCode": "V",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "XIWOW",
                                    "ResBookDesigCode": "X",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                }
                            ]
                        },
                        {
                            "Id": 37,
                            "FlightSegmentDepartureDateTime": "2023-01-23T09:15:00",
                            "FlightSegmentArrivalDateTime": "2023-01-23T10:30:00",
                            "FlightSegmentStopQuantity": 0,
                            "FlightSegmentRPH": "0",
                            "FlightSegmentFlightNumber": "6846",
                            "DepartureAirport": "CGK",
                            "ArrivalAirport": "PGK",
                            "OperatingAirlineCode": "ID",
                            "OperatingAirlineCompanyShortName": "Operated by Batik Air ",
                            "OperatingAirlineCodeContext": "IATA",
                            "OperatingAirlineFlightNumber": "6846",
                            "Equipment": "737-800",
                            "MarketingAirlineCode": "ID",
                            "MarketingAirlineCodeContext": "IATA",
                            "Duration": "01:15",
                            "BookingClassAvails": [
                                {
                                    "FareBasisCodes": "CIWOW",
                                    "ResBookDesigCode": "C",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "DIWOW",
                                    "ResBookDesigCode": "D",
                                    "ResBookDesigQuantity": 4,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "IIWOW",
                                    "ResBookDesigCode": "I",
                                    "ResBookDesigQuantity": 2,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "ZIWOW",
                                    "ResBookDesigCode": "Z",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "YIWOW",
                                    "ResBookDesigCode": "Y",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "AIWOW",
                                    "ResBookDesigCode": "A",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "GIWOW",
                                    "ResBookDesigCode": "G",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "WIWOW",
                                    "ResBookDesigCode": "W",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "SIWOW",
                                    "ResBookDesigCode": "S",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "BIWOW",
                                    "ResBookDesigCode": "B",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "HIWOW",
                                    "ResBookDesigCode": "H",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "KIWOW",
                                    "ResBookDesigCode": "K",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "LIWOW",
                                    "ResBookDesigCode": "L",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "MIWOW",
                                    "ResBookDesigCode": "M",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "NIWOW",
                                    "ResBookDesigCode": "N",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "QIWOW",
                                    "ResBookDesigCode": "Q",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "TIWOW",
                                    "ResBookDesigCode": "T",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "VIWOW",
                                    "ResBookDesigCode": "V",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "XIWOW",
                                    "ResBookDesigCode": "X",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                }
                            ]
                        },
                        {
                            "Id": 38,
                            "FlightSegmentDepartureDateTime": "2023-01-23T15:00:00",
                            "FlightSegmentArrivalDateTime": "2023-01-23T15:45:00",
                            "FlightSegmentStopQuantity": 0,
                            "FlightSegmentRPH": "1",
                            "FlightSegmentFlightNumber": "1233",
                            "DepartureAirport": "PGK",
                            "ArrivalAirport": "PLM",
                            "OperatingAirlineCode": "IW",
                            "OperatingAirlineCompanyShortName": "Operated by Wings Air ",
                            "OperatingAirlineCodeContext": "IATA",
                            "OperatingAirlineFlightNumber": "1233",
                            "Equipment": "ATR",
                            "MarketingAirlineCode": "IW",
                            "MarketingAirlineCodeContext": "IATA",
                            "Duration": "00:45",
                            "BookingClassAvails": [
                                {
                                    "FareBasisCodes": "YIWOW",
                                    "ResBookDesigCode": "Y",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "AIWOW",
                                    "ResBookDesigCode": "A",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "GIWOW",
                                    "ResBookDesigCode": "G",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "WIWOW",
                                    "ResBookDesigCode": "W",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "SIWOW",
                                    "ResBookDesigCode": "S",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "BIWOW",
                                    "ResBookDesigCode": "B",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "HIWOW",
                                    "ResBookDesigCode": "H",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "KIWOW",
                                    "ResBookDesigCode": "K",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "LIWOW",
                                    "ResBookDesigCode": "L",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "MIWOW",
                                    "ResBookDesigCode": "M",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "NIWOW",
                                    "ResBookDesigCode": "N",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "QIWOW",
                                    "ResBookDesigCode": "Q",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "TIWOW",
                                    "ResBookDesigCode": "T",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "VIWOW",
                                    "ResBookDesigCode": "V",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "XIWOW",
                                    "ResBookDesigCode": "X",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "RIWOW",
                                    "ResBookDesigCode": "R",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "OIWOW",
                                    "ResBookDesigCode": "O",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "UIWOW",
                                    "ResBookDesigCode": "U",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                }
                            ]
                        },
                        {
                            "Id": 39,
                            "FlightSegmentDepartureDateTime": "2023-01-23T09:45:00",
                            "FlightSegmentArrivalDateTime": "2023-01-23T11:00:00",
                            "FlightSegmentStopQuantity": 0,
                            "FlightSegmentRPH": "0",
                            "FlightSegmentFlightNumber": "618",
                            "DepartureAirport": "CGK",
                            "ArrivalAirport": "PGK",
                            "OperatingAirlineCode": "JT",
                            "OperatingAirlineCompanyShortName": "Operated by Lion Air ",
                            "OperatingAirlineCodeContext": "IATA",
                            "OperatingAirlineFlightNumber": "618",
                            "Equipment": "737-800",
                            "MarketingAirlineCode": "JT",
                            "MarketingAirlineCodeContext": "IATA",
                            "Duration": "01:15",
                            "BookingClassAvails": [
                                {
                                    "FareBasisCodes": "YIWOW",
                                    "ResBookDesigCode": "Y",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "AIWOW",
                                    "ResBookDesigCode": "A",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "GIWOW",
                                    "ResBookDesigCode": "G",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "WIWOW",
                                    "ResBookDesigCode": "W",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "SIWOW",
                                    "ResBookDesigCode": "S",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "BIWOW",
                                    "ResBookDesigCode": "B",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "HIWOW",
                                    "ResBookDesigCode": "H",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "KIWOW",
                                    "ResBookDesigCode": "K",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "LIWOW",
                                    "ResBookDesigCode": "L",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "MIWOW",
                                    "ResBookDesigCode": "M",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "NIWOW",
                                    "ResBookDesigCode": "N",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "QIWOW",
                                    "ResBookDesigCode": "Q",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "TIWOW",
                                    "ResBookDesigCode": "T",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "VIWOW",
                                    "ResBookDesigCode": "V",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "XIWOW",
                                    "ResBookDesigCode": "X",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                }
                            ]
                        },
                        {
                            "Id": 40,
                            "FlightSegmentDepartureDateTime": "2023-01-23T15:00:00",
                            "FlightSegmentArrivalDateTime": "2023-01-23T15:45:00",
                            "FlightSegmentStopQuantity": 0,
                            "FlightSegmentRPH": "1",
                            "FlightSegmentFlightNumber": "1233",
                            "DepartureAirport": "PGK",
                            "ArrivalAirport": "PLM",
                            "OperatingAirlineCode": "IW",
                            "OperatingAirlineCompanyShortName": "Operated by Wings Air ",
                            "OperatingAirlineCodeContext": "IATA",
                            "OperatingAirlineFlightNumber": "1233",
                            "Equipment": "ATR",
                            "MarketingAirlineCode": "IW",
                            "MarketingAirlineCodeContext": "IATA",
                            "Duration": "00:45",
                            "BookingClassAvails": [
                                {
                                    "FareBasisCodes": "YIWOW",
                                    "ResBookDesigCode": "Y",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "AIWOW",
                                    "ResBookDesigCode": "A",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "GIWOW",
                                    "ResBookDesigCode": "G",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "WIWOW",
                                    "ResBookDesigCode": "W",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "SIWOW",
                                    "ResBookDesigCode": "S",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "BIWOW",
                                    "ResBookDesigCode": "B",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "HIWOW",
                                    "ResBookDesigCode": "H",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "KIWOW",
                                    "ResBookDesigCode": "K",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "LIWOW",
                                    "ResBookDesigCode": "L",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "MIWOW",
                                    "ResBookDesigCode": "M",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "NIWOW",
                                    "ResBookDesigCode": "N",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "QIWOW",
                                    "ResBookDesigCode": "Q",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "TIWOW",
                                    "ResBookDesigCode": "T",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "VIWOW",
                                    "ResBookDesigCode": "V",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "XIWOW",
                                    "ResBookDesigCode": "X",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "RIWOW",
                                    "ResBookDesigCode": "R",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "OIWOW",
                                    "ResBookDesigCode": "O",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "UIWOW",
                                    "ResBookDesigCode": "U",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                }
                            ]
                        },
                        {
                            "Id": 41,
                            "FlightSegmentDepartureDateTime": "2023-01-23T10:00:00",
                            "FlightSegmentArrivalDateTime": "2023-01-23T11:35:00",
                            "FlightSegmentStopQuantity": 0,
                            "FlightSegmentRPH": "0",
                            "FlightSegmentFlightNumber": "370",
                            "DepartureAirport": "CGK",
                            "ArrivalAirport": "BTH",
                            "OperatingAirlineCode": "JT",
                            "OperatingAirlineCompanyShortName": "Operated by Lion Air ",
                            "OperatingAirlineCodeContext": "IATA",
                            "OperatingAirlineFlightNumber": "370",
                            "Equipment": "737-800",
                            "MarketingAirlineCode": "JT",
                            "MarketingAirlineCodeContext": "IATA",
                            "Duration": "01:35",
                            "BookingClassAvails": [
                                {
                                    "FareBasisCodes": "YOW",
                                    "ResBookDesigCode": "Y",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "AOW",
                                    "ResBookDesigCode": "A",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "GOW",
                                    "ResBookDesigCode": "G",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "WOW",
                                    "ResBookDesigCode": "W",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 2670680
                                },
                                {
                                    "FareBasisCodes": "SOW",
                                    "ResBookDesigCode": "S",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "BOW",
                                    "ResBookDesigCode": "B",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "HOW",
                                    "ResBookDesigCode": "H",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "KOW",
                                    "ResBookDesigCode": "K",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "LOW",
                                    "ResBookDesigCode": "L",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 1270630
                                },
                                {
                                    "FareBasisCodes": "MOW",
                                    "ResBookDesigCode": "M",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 681630
                                },
                                {
                                    "FareBasisCodes": "NOW",
                                    "ResBookDesigCode": "N",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "QOW",
                                    "ResBookDesigCode": "Q",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "TOW",
                                    "ResBookDesigCode": "T",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "VOW",
                                    "ResBookDesigCode": "V",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "XOW",
                                    "ResBookDesigCode": "X",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                }
                            ]
                        },
                        {
                            "Id": 42,
                            "FlightSegmentDepartureDateTime": "2023-01-23T17:40:00",
                            "FlightSegmentArrivalDateTime": "2023-01-23T18:45:00",
                            "FlightSegmentStopQuantity": 0,
                            "FlightSegmentRPH": "1",
                            "FlightSegmentFlightNumber": "247",
                            "DepartureAirport": "BTH",
                            "ArrivalAirport": "PLM",
                            "OperatingAirlineCode": "JT",
                            "OperatingAirlineCompanyShortName": "Operated by Lion Air ",
                            "OperatingAirlineCodeContext": "IATA",
                            "OperatingAirlineFlightNumber": "247",
                            "Equipment": "737-900ER",
                            "MarketingAirlineCode": "JT",
                            "MarketingAirlineCodeContext": "IATA",
                            "Duration": "01:05",
                            "BookingClassAvails": [
                                {
                                    "FareBasisCodes": "YOW",
                                    "ResBookDesigCode": "Y",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "AOW",
                                    "ResBookDesigCode": "A",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "GOW",
                                    "ResBookDesigCode": "G",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "WOW",
                                    "ResBookDesigCode": "W",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 2670680
                                },
                                {
                                    "FareBasisCodes": "SOW",
                                    "ResBookDesigCode": "S",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "BOW",
                                    "ResBookDesigCode": "B",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "HOW",
                                    "ResBookDesigCode": "H",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "KOW",
                                    "ResBookDesigCode": "K",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "LOW",
                                    "ResBookDesigCode": "L",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 1270630
                                },
                                {
                                    "FareBasisCodes": "MOW",
                                    "ResBookDesigCode": "M",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 681630
                                },
                                {
                                    "FareBasisCodes": "NOW",
                                    "ResBookDesigCode": "N",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "QOW",
                                    "ResBookDesigCode": "Q",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "TOW",
                                    "ResBookDesigCode": "T",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "VOW",
                                    "ResBookDesigCode": "V",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "XOW",
                                    "ResBookDesigCode": "X",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                }
                            ]
                        },
                        {
                            "Id": 43,
                            "FlightSegmentDepartureDateTime": "2023-01-23T14:40:00",
                            "FlightSegmentArrivalDateTime": "2023-01-23T16:20:00",
                            "FlightSegmentStopQuantity": 0,
                            "FlightSegmentRPH": "0",
                            "FlightSegmentFlightNumber": "378",
                            "DepartureAirport": "CGK",
                            "ArrivalAirport": "BTH",
                            "OperatingAirlineCode": "JT",
                            "OperatingAirlineCompanyShortName": "Operated by Lion Air ",
                            "OperatingAirlineCodeContext": "IATA",
                            "OperatingAirlineFlightNumber": "378",
                            "Equipment": "737-800",
                            "MarketingAirlineCode": "JT",
                            "MarketingAirlineCodeContext": "IATA",
                            "Duration": "01:40",
                            "BookingClassAvails": [
                                {
                                    "FareBasisCodes": "YOW",
                                    "ResBookDesigCode": "Y",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "AOW",
                                    "ResBookDesigCode": "A",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "GOW",
                                    "ResBookDesigCode": "G",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "WOW",
                                    "ResBookDesigCode": "W",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 2670680
                                },
                                {
                                    "FareBasisCodes": "SOW",
                                    "ResBookDesigCode": "S",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "BOW",
                                    "ResBookDesigCode": "B",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "HOW",
                                    "ResBookDesigCode": "H",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "KOW",
                                    "ResBookDesigCode": "K",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "LOW",
                                    "ResBookDesigCode": "L",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 1270630
                                },
                                {
                                    "FareBasisCodes": "MOW",
                                    "ResBookDesigCode": "M",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 681630
                                },
                                {
                                    "FareBasisCodes": "NOW",
                                    "ResBookDesigCode": "N",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "QOW",
                                    "ResBookDesigCode": "Q",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "TOW",
                                    "ResBookDesigCode": "T",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "VOW",
                                    "ResBookDesigCode": "V",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "XOW",
                                    "ResBookDesigCode": "X",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                }
                            ]
                        },
                        {
                            "Id": 44,
                            "FlightSegmentDepartureDateTime": "2023-01-23T17:40:00",
                            "FlightSegmentArrivalDateTime": "2023-01-23T18:45:00",
                            "FlightSegmentStopQuantity": 0,
                            "FlightSegmentRPH": "1",
                            "FlightSegmentFlightNumber": "247",
                            "DepartureAirport": "BTH",
                            "ArrivalAirport": "PLM",
                            "OperatingAirlineCode": "JT",
                            "OperatingAirlineCompanyShortName": "Operated by Lion Air ",
                            "OperatingAirlineCodeContext": "IATA",
                            "OperatingAirlineFlightNumber": "247",
                            "Equipment": "737-900ER",
                            "MarketingAirlineCode": "JT",
                            "MarketingAirlineCodeContext": "IATA",
                            "Duration": "01:05",
                            "BookingClassAvails": [
                                {
                                    "FareBasisCodes": "YOW",
                                    "ResBookDesigCode": "Y",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "AOW",
                                    "ResBookDesigCode": "A",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "GOW",
                                    "ResBookDesigCode": "G",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "WOW",
                                    "ResBookDesigCode": "W",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 2670680
                                },
                                {
                                    "FareBasisCodes": "SOW",
                                    "ResBookDesigCode": "S",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "BOW",
                                    "ResBookDesigCode": "B",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "HOW",
                                    "ResBookDesigCode": "H",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "KOW",
                                    "ResBookDesigCode": "K",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "LOW",
                                    "ResBookDesigCode": "L",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 1270630
                                },
                                {
                                    "FareBasisCodes": "MOW",
                                    "ResBookDesigCode": "M",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 681630
                                },
                                {
                                    "FareBasisCodes": "NOW",
                                    "ResBookDesigCode": "N",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "QOW",
                                    "ResBookDesigCode": "Q",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "TOW",
                                    "ResBookDesigCode": "T",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "VOW",
                                    "ResBookDesigCode": "V",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "XOW",
                                    "ResBookDesigCode": "X",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                }
                            ]
                        },
                        {
                            "Id": 45,
                            "FlightSegmentDepartureDateTime": "2023-01-23T08:00:00",
                            "FlightSegmentArrivalDateTime": "2023-01-23T09:35:00",
                            "FlightSegmentStopQuantity": 0,
                            "FlightSegmentRPH": "0",
                            "FlightSegmentFlightNumber": "900",
                            "DepartureAirport": "CGK",
                            "ArrivalAirport": "BTH",
                            "OperatingAirlineCode": "JT",
                            "OperatingAirlineCompanyShortName": "Operated by Lion Air ",
                            "OperatingAirlineCodeContext": "IATA",
                            "OperatingAirlineFlightNumber": "900",
                            "Equipment": "737-800",
                            "MarketingAirlineCode": "JT",
                            "MarketingAirlineCodeContext": "IATA",
                            "Duration": "01:35",
                            "BookingClassAvails": [
                                {
                                    "FareBasisCodes": "YOW",
                                    "ResBookDesigCode": "Y",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "AOW",
                                    "ResBookDesigCode": "A",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "GOW",
                                    "ResBookDesigCode": "G",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "WOW",
                                    "ResBookDesigCode": "W",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 2670680
                                },
                                {
                                    "FareBasisCodes": "SOW",
                                    "ResBookDesigCode": "S",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "BOW",
                                    "ResBookDesigCode": "B",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "HOW",
                                    "ResBookDesigCode": "H",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "KOW",
                                    "ResBookDesigCode": "K",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "LOW",
                                    "ResBookDesigCode": "L",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 1270630
                                },
                                {
                                    "FareBasisCodes": "MOW",
                                    "ResBookDesigCode": "M",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 681630
                                },
                                {
                                    "FareBasisCodes": "NOW",
                                    "ResBookDesigCode": "N",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "QOW",
                                    "ResBookDesigCode": "Q",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "TOW",
                                    "ResBookDesigCode": "T",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "VOW",
                                    "ResBookDesigCode": "V",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "XOW",
                                    "ResBookDesigCode": "X",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                }
                            ]
                        },
                        {
                            "Id": 46,
                            "FlightSegmentDepartureDateTime": "2023-01-23T17:40:00",
                            "FlightSegmentArrivalDateTime": "2023-01-23T18:45:00",
                            "FlightSegmentStopQuantity": 0,
                            "FlightSegmentRPH": "1",
                            "FlightSegmentFlightNumber": "247",
                            "DepartureAirport": "BTH",
                            "ArrivalAirport": "PLM",
                            "OperatingAirlineCode": "JT",
                            "OperatingAirlineCompanyShortName": "Operated by Lion Air ",
                            "OperatingAirlineCodeContext": "IATA",
                            "OperatingAirlineFlightNumber": "247",
                            "Equipment": "737-900ER",
                            "MarketingAirlineCode": "JT",
                            "MarketingAirlineCodeContext": "IATA",
                            "Duration": "01:05",
                            "BookingClassAvails": [
                                {
                                    "FareBasisCodes": "YOW",
                                    "ResBookDesigCode": "Y",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "AOW",
                                    "ResBookDesigCode": "A",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "GOW",
                                    "ResBookDesigCode": "G",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "WOW",
                                    "ResBookDesigCode": "W",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 2670680
                                },
                                {
                                    "FareBasisCodes": "SOW",
                                    "ResBookDesigCode": "S",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "BOW",
                                    "ResBookDesigCode": "B",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "HOW",
                                    "ResBookDesigCode": "H",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "KOW",
                                    "ResBookDesigCode": "K",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "LOW",
                                    "ResBookDesigCode": "L",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 1270630
                                },
                                {
                                    "FareBasisCodes": "MOW",
                                    "ResBookDesigCode": "M",
                                    "ResBookDesigQuantity": 9,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": 681630
                                },
                                {
                                    "FareBasisCodes": "NOW",
                                    "ResBookDesigCode": "N",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "QOW",
                                    "ResBookDesigCode": "Q",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "TOW",
                                    "ResBookDesigCode": "T",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "VOW",
                                    "ResBookDesigCode": "V",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                },
                                {
                                    "FareBasisCodes": "XOW",
                                    "ResBookDesigCode": "X",
                                    "ResBookDesigQuantity": 0,
                                    "Min_FareBreakdown": 543050,
                                    "Max_FareBreakdown": 2802180,
                                    "PTC_FareBreakdown": "B2BFO"
                                }
                            ]
                        }
                    ],
                    "FlightOptions": [
                        {
                            "ResBookDesigCode": "T",
                            "TotalFare": 543050,
                            "FareBasisCodes": "TIUOW"
                        },
                        {
                            "ResBookDesigCode": "M",
                            "TotalFare": 781580,
                            "FareBasisCodes": "MIDOW"
                        },
                        {
                            "ResBookDesigCode": "Q",
                            "TotalFare": 582950,
                            "FareBasisCodes": "QIUOW"
                        },
                        {
                            "ResBookDesigCode": "M",
                            "TotalFare": 681630,
                            "FareBasisCodes": "MOW"
                        },
                        {
                            "ResBookDesigCode": "K",
                            "TotalFare": 741650,
                            "FareBasisCodes": "KIUOW"
                        },
                        {
                            "ResBookDesigCode": "L",
                            "TotalFare": 778300,
                            "FareBasisCodes": "LIDOW"
                        },
                        {
                            "ResBookDesigCode": "Y",
                            "TotalFare": 2670680,
                            "FareBasisCodes": "WOW"
                        },
                        {
                            "ResBookDesigCode": "Y",
                            "TotalFare": 2802180,
                            "FareBasisCodes": "SIDOW"
                        },
                        {
                            "ResBookDesigCode": "Q",
                            "TotalFare": 1448430,
                            "FareBasisCodes": "KIDOW"
                        },
                        {
                            "ResBookDesigCode": "Q",
                            "TotalFare": 1270630,
                            "FareBasisCodes": "LOW"
                        },
                        {
                            "ResBookDesigCode": "M",
                            "TotalFare": 1764430,
                            "FareBasisCodes": "LOW"
                        },
                        {
                            "ResBookDesigCode": "I",
                            "TotalFare": 1670680,
                            "FareBasisCodes": "IIDOW"
                        },
                        {
                            "ResBookDesigCode": "I",
                            "TotalFare": 1620800,
                            "FareBasisCodes": "IIDOW"
                        }
                    ]
                },
                "FlightSearchResultFare": null
            }
        }
    ]
};

mock.onGet('/flight').reply(()=> [200, data.flight]);
