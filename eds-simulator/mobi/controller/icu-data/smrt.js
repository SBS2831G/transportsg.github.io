EDSTemplateSet['SMRT'] = {
    standardService: [
        { // Render svc
            variables: {
                serviceNumber: '$serviceNumber'
            },
            font: '$serviceFont',
            format: '<serviceNumber,,0>',
            spaceWidth: 2,
            align: 'right-width(1)'
        },
        { // Render DEST via ROAD [SVC]
            variables: {
                currentRoad: '$scrolls[]text',
                currentRoadFont: '$scrolls[]font',
                destination: '$destination.text',
                destinationFont: '$destination.font',
                via: ' via'
            },
            font: '$scrolls[]font',
            active: '$scrolls[]showDest{true}',
            format: ['<destination,destinationFont,9><via,destinationFont,9>', '<currentRoad,currentRoadFont,0>'],
            yPositions: [9, 0],
            spaceWidth: 1,
            align: 'centre-width[0]'
        },
        { // Render DEST [SVC]
            variables: {
                fullDestination: '$scrolls[]text'
            },
            font: '$scrolls[]font',
            active: '$!scrolls[]showDest{true}',
            format: {
                '$scrolls[]text(array?)': ['<fullDestination[0],,9>', '<fullDestination[1],,0>'], // Render multiline dest
                '$!scrolls[]text(array?)': ['<fullDestination,,1>'] // Render singleline dest
            },
            spaceWidth: 1,
            align: 'centre-width[0]'
        }
    ],
    '190-variant': [
        { // Render svc
            variables: {
                serviceNumber: '$serviceNumber'
            },
            font: '$serviceFont',
            format: '<serviceNumber,,0>',
            spaceWidth: 3,
            align: 'right'
        },
        { // Render DEST via ROAD [SVC]
            variables: {
                currentRoad: '$scrolls[]text',
                currentRoadFont: '$scrolls[]font',
                destination: '$destination.text',
                destinationFont: '$destination.font',
                via: ' via'
            },
            font: '$scrolls[]font',
            active: '$scrolls[]showDest{true}',
            format: ['<destination,destinationFont,9><via,destinationFont,9>', '<currentRoad,currentRoadFont,0>'],
            yPositions: [9, 0],
            spaceWidth: 1,
            align: 'centre-width[0]'
        },
        { // Render DEST [SVC]
            variables: {
                fullDestination: '$scrolls[]text'
            },
            font: '$scrolls[]font',
            active: '$!scrolls[]showDest{true}',
            format: {
                '$scrolls[]text(array?)': ['<fullDestination[0],,9>', '<fullDestination[1],,0>'], // Render multiline dest
                '$!scrolls[]text(array?)': ['<fullDestination,,1>'] // Render singleline dest
            },
            spaceWidth: 1,
            align: 'centre-width[0]'
        }
    ],
    full: [
        {
            variables: {
                text: '$text'
            },
            font: 'full',
            format: '<text,,0>',
            spaceWidth: 1,
            align: 'centre'
        }
    ],
    big: [
        {
            variables: {
                text: '$text'
            },
            font: 'big',
            format: '<text,,1>',
            spaceWidth: 1,
            align: 'centre'
        }
    ],
    efat: [
        {
            variables: {
                text: '$text'
            },
            font: 'efat',
            format: '<text,,1>',
            spaceWidth: 1,
            align: 'centre'
        }
    ],
    image: [
        {
            variables: {
                text: ''
            },
            font: 'thick',
            format: '<text,,>',
            spaceWidth: 0,
            align: 'centre',
            images: [
                {
                    name: '$image',
                    x: '$x'
                }
            ]
        }
    ],
    swt: [
        { // Render svc
            variables: {
                serviceNumber: '$serviceNumber'
            },
            font: '$serviceFont',
            format: '<serviceNumber,,0>',
            spaceWidth: 2,
            align: 'right-width(1)'
        },
        { // Render ENDS AT via DEST
            variables: {
                destination: '$destination.text',
                font: '$font',
                endsAt: 'ENDS AT',
                endsAtExtra: '$destination.road{""}'
            },
            font: 'thin',
            format: ['<endsAt,font,9><endsAtExtra,font,9>', '<destination,font,0>'],
            yPositions: [9, 0],
            spaceWidth: 1,
            align: 'centre-width[0]'
        }
    ],
    e2i: [
        {
            variables: {
                text: '$scrolls[]text'
            },
            font: '$scrolls[]font',
            format: {
                '$scrolls[]text(array?)': ['<text[0],$scrolls[]font[0],9>', '<text[1],$scrolls[]font[1],0>'],
                '$!scrolls[]text(array?)': ['<text,,1>']
            },
            spaceWidth: 1,
            align: 'centre'
        }
    ],
    twoline: [
        {
            variables: {
                top: '$top',
                bottom: '$bottom',
                topFont: '$topFont',
                bottomFont: '$bottomFont'
            },
            font: '$font',
            format: ['<top,topFont,9>', '<bottom,bottomFont,0>'],
            spaceWidth: 1,
            align: 'centre'
        }
    ],
    centre: [
        {
            variables: {
                text: '$text',
                spacing: '$spacing',
            },
            font: '$font',
            format: '<text,,spacing>',
            spaceWidth: 1,
            align: 'centre'
        }
    ]
}

EDSDataSet['SMRT'] = {
    1: {
        renderType: 'full',
        text: 'CHARTERED'
    },
    2: {
        renderType: 'big',
        text: 'ANG MO KIO DEPOT'
    },
    3: {
        renderType: 'big',
        text: 'KRANJI DEPOT'
    },
    4: {
        renderType: 'big',
        text: 'SMRT BUSES'
    },
    5: {
        renderType: 'big',
        text: 'OFF SERVICE'
    },
    6: {
        renderType: 'big',
        text: 'WOODLANDS DEPOT'
    },
    7: {
        renderType: 'big',
        text: 'OFF SERVICE'
    },
    8: {
        renderType: 'big',
        text: 'OFF SERVICE'
    },
    9: {
        renderType: 'full',
        text: 'ON DRIVING TEST'
    },
    10: {
        renderType: 'full',
        text: 'FERRY SERVICE'
    },
    11: {
        renderType: 'full',
        text: 'MRT SHUTTLE'
    },
    13: {
        renderType: 'full',
        text: 'TRAINING BUS'
    },
    14: {
        renderType: 'big',
        text: 'MoBi 0123456789'
    },
    16: {
        renderType: 'full',
        text: 'PULAU TEKONG'
    },
    18: {
        renderType: 'full',
        text: 'LRT SHUTTLE A'
    },
    19: {
        renderType: 'full',
        text: 'LRT SHUTTLE B'
    },
    66: {
        renderType: 'efat',
        text: 'BULIM  DEPOT'
    },
    81: {
        renderType: 'twoline',
        text: 'WELCOME TO IKEA',
        topFont: 'thick',
        bottomFont: 'thin',
        top: 'WELCOME TO IKEA',
        bottom: 'IKEA    -   TAMPINES'
    },
    82: {
        renderType: 'twoline',
        text: 'WELCOME TO IKEA',
        font: 'thick',
        top: 'WELCOME TO IKEA',
        bottom: 'IKEA  -  SENGKANG'
    },
    83: {
        renderType: 'twoline',
        text: 'WELCOME TO IKEA',
        topFont: 'thick',
        bottomFont: 'thin',
        top: 'WELCOME TO IKEA',
        bottom: 'IKEA    -     ANG MO KIO'
    },
    84: {
        renderType: 'twoline',
        text: 'WELCOME TO IKEA',
        font: 'thick',
        top: 'WELCOME TO IKEA',
        bottom: 'IKEA  -  WOODLANDS'
    },
    85: {
        renderType: 'twoline',
        text: 'WELCOME TO IKEA',
        font: 'thick',
        top: 'WELCOME TO IKEA',
        bottom: 'IKEA  -  BOON LAY'
    },
    86: {
        renderType: 'twoline',
        text: 'WELCOME TO IKEA',
        font: 'thick',
        top: 'WELCOME TO IKEA',
        bottom: 'IKEA  -  YISHUN'
    },
    89: {
        renderType: 'twoline',
        text: 'DOWNTOWN EAST - PASIR RIS',
        font: 'tall',
        top: 'DOWNTOWN EAST   -  PASIR RIS',
        bottom: 'CARPARKS C, D, E, F',
    },
    91: {
        renderType: 'twoline',
        text: 'BEDOK MRT TO & FROM; GIANT, IKEA & COURTS',
        font: 'thin',
        top: 'BEDOK MRT TO & FROM',
        bottom: 'GIANT, IKEA & COURTS'
    },
    92: {
        renderType: 'twoline',
        text: 'TAMPINES MRT TO & FROM; GIANT, IKEA & COURTS',
        font: 'thin',
        top: 'TAMPINES MRT TO & FROM',
        bottom: 'GIANT, IKEA & COURTS'
    },
    98: {
        renderType: 'twoline',
        text: 'SENGKANG & PUNGGOL -; GIANT, IKEA & COURTS',
        font: 'thin',
        top: 'SENGKANG & PUNGGOL -',
        bottom: 'GIANT, IKEA & COURTS'
    },
    99: {
        renderType: 'twoline',
        text: 'PASIR RIS TO & FROM; GIANT, IKEA & COURTS',
        font: 'thin',
        top: 'PASIR RIS TO & FROM',
        bottom: 'GIANT, IKEA & COURTS'
    },
    101: {
        renderType: 'twoline',
        text: 'FREE CHINATOWN SHUTTLE SERVICE',
        font: 'thick',
        top: 'FREE CHINATOWN',
        bottom: 'SHUTTLE SERVICE'
    },
    103: {
        renderType: 'e2i',
        serviceFont: 'fat',
        text: 'e2i & SMRT;BUS CARNIVAL AND CAREER FAIR',
        scrolls: [
            {
                text: 'WELCOME',
                font: 'big'
            },
            {
                text: 'JOURNEY WITH US',
                font: 'big'
            },
            {
              text: ['e2i & SMRT', 'BUS CARNIVAL AND CAREER FAIR'],
              font: ['thick', 'tall'],
            }
        ]
    },
    104: {
        renderType: 'e2i',
        serviceFont: 'fat',
        text: 'SMRT BUS CARNIVAL;AND CAREER FAIR',
        scrolls: [
            {
                text: 'WELCOME',
                font: 'big'
            },
            {
                text: 'JOURNEY WITH US',
                font: 'big'
            },
            {
              text: ['SMRT BUS CARNIVAL', 'AND CAREER FAIR'],
              font: 'thick'
            }
        ]
    },
    106: {
        renderType: 'efat',
        text: 'NGEE ANN POLY'
    },
    113: {
        renderType: 'big',
        text: 'AIRSHOW SHUTTLE'
    },
    114: {
        renderType: 'twoline',
        text: 'JOO KOON - BUKIT GOMBAK PARALLEL BUS SERVICE',
        top: 'JOO KOON - BUKIT GOMBAK',
        bottom: 'PARALLEL BUS SERVICE',
        font: 'thin'
    },
    115: {
        renderType: 'twoline',
        text: 'BUKIT GOMBAK - JOO KOON PARALLEL BUS SERVICE',
        top: 'BUKIT GOMBAK - JOO KOON',
        bottom: 'PARALLEL BUS SERVICE',
        font: 'thin'
    },
    117: {
        renderType: 'image',
        text: 'SMRT',
        image: 'logo',
        x: 'centre'
    },
    118: {
        renderType: 'big',
        text: 'SMRT FLY OUR FLAG'
    },
    119: {
        renderType: 'efat',
        text: 'SMRT'
    },
    141: {
        renderType: 'twoline',
        text: 'FREE SMRT CHINATOWN SHUTTLE SERVICE',
        font: 'thick',
        top: 'FREE SMRT CHINATOWN',
        bottom: 'SHUTTLE BUS SERVICE'
    },
    142: {
        renderType: 'centre',
        text: 'THANK YOU EXSA WINNERS',
        font: 'thin',
        spacing: 4
    },
    150: {
        renderType: 'big',
        text: 'FREE SHUTTLE'
    },
    151: {
        renderType: 'big',
        text: 'FREE BRIDGING BUS'
    },
    152: {
        renderType: 'big',
        text: 'LRT BRIDGING A'
    },
    153: {
        renderType: 'big',
        text: 'LRT BRIDGING B'
    },
    155: {
        renderType: 'big',
        text: 'FREE SHUTTLE BUS'
    },
    199: {
        renderType: 'efat',
        text: 'ON TEST'
    },
    200: {
        renderType: 'standardService',
        serviceNumber: '804',
        serviceFont: 'full',
        destination: {
            text: 'YISHUN INT',
            font: 'thick'
        },
        scrolls: [
            {
                text: ['YISHUN', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'YISHUN AVE 2',
                font: 'thick'
            },
            {
                text: 'YISHUN RING RD',
                font: 'thick'
            },
            {
                text: 'YISHUN AVE 1, 11',
                font: 'thick'
            },
            {
                text: 'YISHUN RING RD',
                font: 'thick'
            },
            {
                text: 'YISHUN AVE 2',
                font: 'thick'
            },
        ]
    },
    203: {
        renderType: 'standardService',
        serviceNumber: '800',
        serviceFont: 'full',
        destination: {
            text: 'YISHUN INT',
            font: 'thick'
        },
        scrolls: [
            {
                text: ['YISHUN', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'YISHUN AVE 3',
                font: 'thick'
            },
            {
                text: 'YISHUN AVE 9',
                font: 'thick'
            },
            {
                text: 'YISHUN RING RD',
                font: 'thick'
            },
            {
                text: 'YISHUN AVE 2, 7',
                font: 'thick'
            },
            {
                text: 'SEMBAWANG RD',
                font: 'thick'
            },
            {
                text: 'YISHUN ST 71',
                font: 'thick'
            },
            {
                text: 'YISHUN AVE 9',
                font: 'thick'
            },
        ]
    },
    204: {
        renderType: 'standardService',
        serviceNumber: '806',
        serviceFont: 'full',
        destination: {
            text: 'YISHUN INT',
            font: 'thick'
        },
        scrolls: [
            {
                text: ['YISHUN', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'YISHUN AVE 11',
                font: 'thick'
            },
            {
                text: 'YISHUN AVE 6',
                font: 'thick'
            },
            {
                text: 'YISHUN RING RD',
                font: 'thick'
            },
        ]
    },
    206: {
        renderType: 'standardService',
        serviceNumber: '811',
        serviceFont: 'full',
        destination: {
            text: 'YISHUN INT',
            font: 'thick'
        },
        scrolls: [
            {
                text: ['YISHUN', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'YISHUN AVE 9, 6, 7',
                font: 'thin'
            },
            {
                text: 'SEMBAWANG RD ',
                font: 'thick'
            },
            {
                text: 'YISHUN AVE 5, 2, 7',
                font: 'thin'
            },
            {
                text: 'YISHUN AVE 6, 9, 2',
                font: 'thin'
            },
            {
                text: 'YISHUN RING RD',
                font: 'thin'
            },
            {
                text: 'YISHUN ST 81',
                font: 'thin'
            },
            {
                text: 'YISHUN AVE 1',
                font: 'thin'
            },
            {
                text: 'YISHUN AVE 4',
                font: 'thin'
            },
            {
                text: 'YISHUN RING RD',
                font: 'thin'
            },
            {
                text: 'YISHUN AVE 2',
                font: 'thin'
            },
        ]
    },
    207: {
        renderType: 'swt',
        serviceNumber: '811E',
        serviceFont: 'full',
        destination: {
            text: 'YISHUN INT/MRT',
        },
        font: 'thick'
    },
    208: {
        renderType: 'standardService',
        serviceNumber: '812',
        serviceFont: 'full',
        destination: {
            text: 'YISHUN INT',
            font: 'thick'
        },
        scrolls: [
            {
                text: ['YISHUN', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'YISHUN CENTRAL',
                font: 'thick'
            },
            {
                text: 'YISHUN ST 61',
                font: 'thick'
            },
            {
                text: 'YISHUN AVE 4',
                font: 'thick'
            },
        ]
    },
    209: {
        renderType: 'swt',
        serviceNumber: '812E',
        serviceFont: 'full',
        destination: {
            text: 'YISHUN INT / MRT',
        },
        font: 'thin'
    },
    210: {
        renderType: 'standardService',
        serviceNumber: '900',
        serviceFont: 'full',
        destination: {
            text: 'WOODLANDS INT',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['WOODLANDS', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'WDL AVENUE 7',
                font: 'thick'
            },
            {
                text: 'WDL AVENUE 4',
                font: 'thick'
            },
            {
                text: 'WDL DRIVE 14',
                font: 'thick'
            },
            {
                text: 'WDL AVENUE 4 ',
                font: 'thick'
            },
            {
                text: 'WDL AVENUE 7 ',
                font: 'thick'
            },
        ]
    },
    213: {
        renderType: 'swt',
        serviceNumber: '911E',
        serviceFont: 'full',
        destination: {
            text: 'WDL INT / MRT',
        },
        font: 'thin'
    },
    215: {
        renderType: 'swt',
        serviceNumber: '912E',
        serviceFont: 'full',
        destination: {
            text: 'WDL INT / MRT',
        },
        font: 'thin'
    },
    217: {
        renderType: 'swt',
        serviceNumber: '913E',
        serviceFont: 'full',
        destination: {
            text: 'WDL INT / MRT',
        },
        font: 'thin'
    },
    218: {
        renderType: 'standardService',
        serviceNumber: '300',
        serviceFont: 'full',
        destination: {
            text: 'CHOA CHU KANG',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['CHOA CHU KANG', 'INT / MRT / LRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'CHOA CHU KANG AVE 4',
                font: 'thin'
            },
            {
                text: 'CHOA CHU KANG AVE 2',
                font: 'thin'
            },
            {
                text: 'CHOA CHU KANG WAY',
                font: 'thin'
            },
            {
                text: 'CHOA CHU KANG AVE 3',
                font: 'thin'
            },
        ]
    },
    219: {
        renderType: 'standardService',
        serviceNumber: '302',
        serviceFont: 'full',
        destination: {
            text: 'CHOA CHU KANG',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['CHOA CHU KANG', 'INT / MRT / LRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'CHOA CHU KANG WAY',
                font: 'thin'
            },
            {
                text: 'CHOA CHU KANG ST 52',
                font: 'thin'
            },
            {
                text: 'CHOA CHU KANG CRES',
                font: 'thin'
            },
        ]
    },
    221: {
        renderType: 'swt',
        serviceNumber: '307E',
        serviceFont: 'full',
        destination: {
            text: 'C.C.K INT/MRT/LRT',
        },
        font: 'thin'
    },
    222: {
        renderType: 'standardService',
        serviceNumber: '307',
        serviceFont: 'full',
        destination: {
            text: 'CHOA CHU KANG',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['CHOA CHU KANG', 'INT / MRT / LRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'CHOA CHU KANG CENTRAL',
                font: 'tall'
            },
            {
                text: 'TECK WHYE LANE',
                font: 'thin'
            },
            {
                text: 'CHOA CHU KANG CENTRAL',
                font: 'tall'
            },
            {
                text: 'CHOA CHU KANG AVE 4',
                font: 'tall'
            },
            {
                text: 'CHOA CHU KANG NORTH 5',
                font: 'tall'
            },
            {
                text: 'CHOA CHU KANG NORTH 6',
                font: 'tall'
            },
            {
                text: 'YEW TEE MRT',
                font: 'thick'
            },
            {
                text: 'CHOA CHU KANG ST 62',
                font: 'tall'
            },
        ]
    },
    224: {
        renderType: 'swt',
        serviceNumber: '811',
        serviceFont: 'full',
        destination: {
            text: 'YISHUN ITE',
        },
        font: 'thick'
    },
    225: {
        renderType: 'standardService',
        serviceNumber: '901',
        serviceFont: 'full',
        destination: {
            text: 'WOODLANDS INT',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['WOODLANDS', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'WOODLANDS AVE 2,1',
                font: 'thin'
            },
            {
                text: 'WOODLANDS DRIVE 16',
                font: 'thin'
            },
            {
                text: 'WOODLANDS AVE 6',
                font: 'thin'
            },
        ]
    },
    229: {
        renderType: 'swt',
        serviceNumber: '67A',
        serviceFont: 'full',
        destination: {
            text: 'HWA CHONG JC',
        },
        font: 'thick'
    },
    230: {
        renderType: 'swt',
        serviceNumber: '67W',
        serviceFont: 'full',
        destination: {
            text: ' LITTLE INDIA'
        },
        font: 'thick'
    },
    231: {
        renderType: 'swt',
        serviceNumber: '77A',
        serviceFont: 'full',
        destination: {
            road: ' TOH TUCK ROAD',
            text: 'BUKIT BATOK SEC SCH',
        },
        font: 'tall'
    },
    272: {
        renderType: 'swt',
        serviceNumber: '302A',
        serviceFont: 'full',
        destination: {
            text: 'OPP YEW TEE MRT'
        },
        font: 'thin'
    },
    285: {
        renderType: 'standardService',
        serviceNumber: '301',
        serviceFont: 'full',
        destination: {
            text: 'CHOA CHU KANG',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['CHOA CHU KANG', 'INT / MRT / LRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'C.C.K WAY',
                font: 'thick'
            },
            {
                text: 'C. C. K  AVE 2,3',
                font: 'thin'
            },
            {
                text: 'C. C. K  AVE 5,6',
                font: 'thin'
            },//?
            {
                text: 'C. C. K  AVENUE 5',
                font: 'thin'
            },
            {
                text: 'KEAT HONG CLOSE (LOOP)',
                font: 'tall'
            },
            {
                text: 'C. C. K  AVE 6,1',
                font: 'thin'
            },
        ]
    },
    410: {
        renderType: 'standardService',
        serviceNumber: '176',
        serviceFont: 'full',
        destination: {
            text: 'BUKIT MERAH',
            font: 'thick'
        },
        scrolls: [
            {
                text: 'BUKIT MERAH',
                font: 'big',
                showDest: false
            },
            {
                text: 'UPP BUKIT TIMAH RD',
                font: 'thin'
            },
            {
                text: 'HILLVIEW AVE',
                font: 'thick'
            },
            {
                text: 'BT BATOK CTR / MRT',
                font: 'thin'
            },
            {
                text: 'JURONG TOWN HALL',
                font: 'thin'
            },
            {
                text: 'WEST COAST HIGHWAY',
                font: 'thin'
            },
            {
                text: 'TELOK BLANGAH',
                font: 'thin'
            }
        ]
    },
    422: {
        renderType: 'standardService',
        serviceNumber: '187',
        serviceFont: 'full',
        destination: {
            text: 'BOON LAY',
            font: 'thick'
        },
        scrolls: [
            {
                text: ['BOON LAY', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'WOODLANDS AVE 3',
                font: 'thin'
            },
            {
                text: 'BUKIT PANJANG RD',
                font: 'thin'
            },
            {
                text: 'BUKIT BATOK WEST',
                font: 'thin'
            },
            {
                text: 'BUKIT BATOK CTR,MRT',
                font: 'thin'
            },
            {
                text: 'JURONG EAST',
                font: 'thick'
            },
            {
                text: 'BOON LAY WAY',
                font: 'thick'
            }
        ]
    },
    423: {
        renderType: 'standardService',
        serviceNumber: '187',
        serviceFont: 'full',
        destination: {
            text: 'WOODLANDS INT',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['WOODLANDS', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'BOON LAY WAY',
                font: 'thick'
            },
            {
                text: 'JURONG EAST',
                font: 'thick'
            },
            {
                text: 'BUKITT BATOK CTR,MRT',
                font: 'thin'
            },
            {
                text: 'BUKIT BATOK WEST',
                font: 'thick'
            },
            {
                text: 'BUKIT PANJANG RD',
                font: 'thin'
            },
            {
                text: 'WOODLANDS AVE 3',
                font: 'thin'
            }
        ]
    },
    431: {
        renderType: 'standardService',
        serviceNumber: '852',
        serviceFont: 'full',
        destination: {
            text: 'BUKIT BATOK',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['BUKIT BATOK', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'YISHUN AVE 2',
                font: 'thick'
            },
            {
                text: 'LENTOR AVE',
                font: 'thick'
            },
            {
                text: 'AND MO KIO AVE 6',
                font: 'thin'
            },
            {
                text: 'LORNIE RD',
                font: 'thick'
            },
            {
                text: 'BUKIT TIMAH RD',
                font: 'thick'
            },
            {
                text: 'UPP BUKIT TIMAH RD',
                font: 'thin'
            },
            {
                text: 'BUKIT BATOK E. AVE 6',
                font: 'thin'
            },
        ]
    },
    451: {
        renderType: 'standardService',
        serviceNumber: '925',
        serviceFont: 'full',
        destination: {
            text: 'CHOA CHU KANG',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['CHOA CHU KANG', 'INT / MRT / LRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'WOODLANDS AVE 3',
                font: 'thin'
            },
            {
                text: 'KRANJI RD, WAY',
                font: 'thin'
            },
            {
                text: 'SUNGEI KADUT ST 1',
                font: 'thin'
            },
            {
                text: 'WOODLANDS RD',
                font: 'thin'
            },
            {
                text: 'KRANJI EXP WAY',
                font: 'thin'
            },
        ]
    },
    460: {
        renderType: 'standardService',
        serviceNumber: '961',
        serviceFont: 'full',
        destination: {
            text: 'GEYLANG LOR 1',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['GEYLANG LOR 1/', 'KALLANG MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'WOODLANDS AVE 3',
                font: 'thin'
            },
            {
                text: 'UPP BUKIT TIMAH RD',
                font: 'thin'
            },
            {
                text: 'QUEENSWAY',
                font: 'thin'
            },
            {
                text: 'BUKIT MERAH',
                font: 'thin'
            },
            {
                text: 'CHINATOWN',
                font: 'thin'
            },
            {
                text: 'BEACH RD',
                font: 'thin'
            },
            {
                text: 'KALLANG BAHRU',
                font: 'thin'
            },
        ]
    },
    461: {
        renderType: 'standardService',
        serviceNumber: '961',
        serviceFont: 'full',
        destination: {
            text: 'WOODLANDS INT',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['WOODLANDS', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'WOODLANDS AVE 3',
                font: 'thin'
            }, //?
            {
                text: 'QUEENSWAY',
                font: 'thin'
            }
        ]
    },
    466: {
        renderType: 'standardService',
        serviceNumber: '67',
        serviceFont: 'full',
        destination: {
            text: 'TAMPINES',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['TAMPINES', ' INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'DUNEARN ROAD',
                font: 'thin'
            },//?
            {
                text: 'SERANGOON ROAD',
                font: 'thin'
            },
            {
                text: 'SIMS AVE',
                font: 'thin'
            },
        ]
    },
    469: {
        renderType: 'standardService',
        serviceNumber: '172',
        serviceFont: 'full',
        destination: {
            text: 'BOON LAY ',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['BOON LAY', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'CHOA CHU KANG DRIVE',
                font: 'thin'
            },
            {
                text: 'CHOA CHU KANG AVE 1,3',
                font: 'thin'
            },
            {
                text: 'CHOA CHU KANG ROAD',
                font: 'thin'
            },
            {
                text: 'BRICKLAND ROAD',
                font: 'thin'
            },
            {
                text: 'JALAN BEHAR',
                font: 'thin'
            }
        ]
    },
    470: {
        renderType: 'standardService',
        serviceNumber: '172',
        serviceFont: 'full',
        destination: {
            text: 'CHOA CHU KANG',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['CHOA CHU KANG', 'INT / MRT / LRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'JLN BOON LAY',
                font: 'thin'
            },
            {
                text: 'JALAN BEHAR',
                font: 'thin'
            },
            {
                text: 'CHOA CHU KANG ROAD',
                font: 'thin'
            },
            {
                text: 'BRICKLAND ROAD',
                font: 'thin'
            },
            {
                text: 'CHOA CHU KANG AVE 1, 3',
                font: 'thin'
            }
        ]
    },
    475: {
        renderType: 'standardService',
        serviceNumber: '188',
        serviceFont: 'full',
        destination: {
            text: 'HARBOURFRONT',
            font: 'thin'
        },
        scrolls: [
            {
                text: 'HARBOURFRONT',
                font: 'big',
                showDest: false
            },
            {
                text: 'CHOA CHU KANG WAY',
                font: 'thin'
            },
            {
                text: 'B. B WEST AVE 4, 2',
                font: 'thin'
            },
            {
                text: 'TOH GUAN ROAD',
                font: 'thin'
            },
            {
                text: 'BOON LAY WAY',
                font: 'thin'
            },
            {
                text: 'AYE, CLEMENTI RD',
                font: 'thin'
            } //Missing data oh noeses!!
        ]
    },
    495: {
        renderType: 'standardService',
        serviceNumber: '927',
        serviceFont: 'full',
        destination: {
            text: 'SINGAPORE ZOO',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['SINGAPORE', 'ZOOLOGICAL GDN '],
                font: 'thick',
                showDest: false
            },
            {
                text: 'CHOA CHU KANG AVE 4',
                font: 'thin'
            },//?
            {
                text: 'MANDAI RD',
                font: 'thin'
            }
        ]
    },
    496: {
        renderType: 'standardService',
        serviceNumber: '61',
        serviceFont: 'full',
        destination: {
            text: 'EUNOS',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['EUNOS', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'CLEMENTI RD',
                font: 'thin'
            },
            {
                text: 'HOLLAND RD',
                font: 'thin'
            },
            {
                text: 'TELOK BLANGAH',
                font: 'thin'
            },
            {
                text: 'CHINATOWN',
                font: 'thin'
            },
            {
                text: 'VICTORIA ST',
                font: 'thin'
            },
            {
                text: 'KALLANG BAHRU',
                font: 'thin'
            },
            {
                text: 'MACPHERSON RD',
                font: 'thin'
            },
            {
                text: 'UBI AVE 2',
                font: 'thin'
            }
        ]
    },
    497: {
        renderType: 'standardService',
        serviceNumber: '61',
        serviceFont: 'full',
        destination: {
            text: 'BUKIT BATOK',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['BUKIT BATOK', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'UBI AVE 2',
                font: 'thin'
            },
            {
                text: 'MACPHERSON RD',
                font: 'thin'
            },
            {
                text: 'KALLANG BAHRU',
                font: 'thin'
            },
            {
                text: 'NORTH BRIDGE RD',
                font: 'thin'
            },
            {
                text: 'SOUTH BRIDGE RD',
                font: 'thin'
            },
            {
                text: 'TELOK BLANGAH RD',
                font: 'thin'
            },
            {
                text: 'HOLLAND RD',
                font: 'thin'
            },
            {
                text: 'CLEMENTI RD',
                font: 'thin'
            }

        ]
    },
    499: {
        renderType: 'standardService',
        serviceNumber: '77',
        serviceFont: 'full',
        destination: {
            text: 'BUKIT BATOK',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['BUKIT BATOK', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'PENANG RD',
                font: 'thin'
            },
            {
                text: 'ORCHARD BOULEVARD',
                font: 'thin'
            },
            {
                text: 'HOLLAND RD',
                font: 'thin'
            },
            {
                text: 'SIXTH AVE',
                font: 'thin'
            },
            {
                text: 'BUKIT TIMAH RD',
                font: 'thin'
            }
        ]
    },
    512: {
        renderType: 'standardService',
        serviceNumber: '970',
        serviceFont: 'full',
        destination: {
            text: 'SHENTON WAY',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['SHENTON', 'WAY'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'HILLVIEW RD, AVE',
                font: 'thin'
            },
            {
                text: 'JLN JURONG KECHIL',
                font: 'thin'
            },
            {
                text: 'DUNEARN RD',
                font: 'thin'
            },
            {
                text: 'SIXTH AVE',
                font: 'thin'
            },
            {
                text: 'COMMONWEALTH AVE',
                font: 'thin'
            },
            {
                text: 'KIM SENG ROAD',
                font: 'thin'
            },
            {
                text: 'EU TONG SEN ST',
                font: 'thin'
            }
        ]
    },
    522: {
        renderType: 'standardService',
        serviceNumber: '963',
        serviceFont: 'full',
        destination: {
            text: 'WOODLANDS INT',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['WOODLANDS', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'TELOK BLANGAH RD',
                font: 'thin'
            },
            {
                text: 'ALEXANDRA RD',
                font: 'thin'
            },
            {
                text: 'SISIR , NUH',
                font: 'thick'
            },
            {
                text: 'A Y E',
                font: 'thick'
            },
            {
                text: 'CLEMENTI AVE 6',
                font: 'thin'
            },
            {
                text: 'B. B EAST AVE 3,4',
                font: 'thin'
            },
            {
                text: 'B. B EAST AVE 2',
                font: 'thin'
            },
            {
                text: 'HILLVIEW AVENUE',
                font: 'thin'
            },
            {
                text: 'BUKIT PANJANG RD',
                font: 'thin'
            },
            {
                text: 'MASRILING MRT',
                font: 'thin'
            }
        ]
    },
    528: {
        renderType: 'standardService',
        serviceNumber: '985',
        serviceFont: 'full',
        destination: {
            text: 'CHOA CHU KANG',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['CHOA CHU KANG', 'INT / MRT / LRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'SERANGOON ROAD',
                font: 'thin'
            },
            {
                text: 'JLN TOA PAYOH',
                font: 'thin'
            },
            {
                text: 'B.B EAST AVE 2, 4',
                font: 'thin'
            },
            {
                text: 'B.B WEST AVE 7',
                font: 'thin'
            },
            {
                text: 'TECK WHYE AVE',
                font: 'thin'
            }
        ]
    },
    529: {
        renderType: 'standardService',
        serviceNumber: '985',
        serviceFont: 'full',
        destination: {
            text: 'GEYLANG LOR 1',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['GEYLANG LOR 1/', 'KALLANG MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'B. B WEST AVE 7,4',
                font: 'thin'
            },
        ]
    },
    586: {
        renderType: 'standardService',
        serviceNumber: '188R',
        serviceFont: 'full',
        destination: {
            text: 'R W S',
            font: 'thick'
        },
        scrolls: [
            {
                text: ['RESORTS WORLD', 'SENTOSA'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'TELOK BLANGAH ROAD',
                font: 'thin'
            },
        ]
    },
    591: {
        renderType: 'standardService',
        serviceNumber: '178',
        serviceFont: 'full',
        destination: {
            text: 'BOON LAY',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['BOON LAY', 'INT / MRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'WOODLANDS CENTRE RD',
                font: 'thin'
            },
            {
                text: 'UPP BT TIMAH',
                font: 'thin'
            },
            {
                text: 'BUKIT BATOK',
                font: 'thin'
            },
            {
                text: 'JURONG TOWN HALL',
                font: 'thin'
            },
            {
                text: 'CORPORATION RD',
                font: 'thin'
            },
        ]
    },
    611: {
        renderType: 'standardService',
        serviceNumber: '176',
        serviceFont: 'full',
        destination: {
            text: 'BUKIT PANJANG',
            font: 'thin'
        },
        scrolls: [
            {
                text: 'BUKIT PANJANG',
                font: 'big',
                showDest: false
            },
            {
                text: 'TELOK BLANGAH RD',
                font: 'thin'
            },
            {
                text: 'JURONG TOWN HALL',
                font: 'thin'
            },
            {
                text: 'BT BATOK CTR/ MRT',
                font: 'thin'
            },
            {
                text: 'HILLVIEW AVENUE',
                font: 'thick'
            },
            {
                text: 'UPP BUKIT TIMAH RD',
                font: 'thin'
            }
        ]
    },
    614: {
        renderType: 'standardService',
        serviceNumber: '184',
        serviceFont: 'full',
        destination: {
            text: 'BUKIT PANJANG',
            font: 'thin'
        },
        scrolls: [
            {
                text: 'BUKIT PANJANG',
                font: 'big',
                showDest: false
            },
            {
                text: 'CLEMENTI ROAD',
                font: 'thick'
            },
            {
                text: 'UPP BUKIT TIMAH RD',
                font: 'thin'
            },
            {
                text: 'CASHEW ROAD',
                font: 'thick'
            },
            {
                text: 'BUKIT PANJANG RD',
                font: 'thin'
            }
        ]
    },
    619: {
        renderType: 'standardService',
        serviceNumber: '970',
        serviceFont: 'full',
        destination: {
            text: 'BUKIT PANJANG',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['BUKIT', 'PANJANG'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'NEW BRIDGE RD',
                font: 'thin'
            },
            {
                text: 'ZION RD',
                font: 'thin'
            }
        ]
    },
    654: {
        renderType: 'standardService',
        serviceNumber: '983',
        serviceFont: 'full',
        destination: {
            text: 'CHOA CHU KANG',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['CHOA CHU KANG', 'INTERCHANGE'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'C.C.K AVE 4 ,5',
                font: 'thin'
            },
            {
                text: 'C.C.K AVE 6 ,1',
                font: 'thin'
            },
            {
                text: 'CHOA CHU KANG RD',
                font: 'thin'
            },
            {
                text: 'PETIR ROAD',
                font: 'thin'
            },
            {
                text: 'JELUBU RD (LOOP)',
                font: 'thin'
            }
        ]
    },
    1901: {
        renderType: '190-variant',
        serviceNumber: '190',
        serviceFont: 'full',
        destination: {
            text: 'KAMPONG BAHRU TER',
            font: 'tall'
        },
        scrolls: [
            {
                text: ['KAMPONG BAHRU', 'TERMINAL'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'BT PANJANG RD',
                font: 'thin'
            },
            {
                text: 'STEVENS ROAD',
                font: 'thin'
            },
            {
                text: 'ORCHARD ROAD',
                font: 'thin'
            },
            {
                text: 'HILL STREET',
                font: 'thin'
            },
            {
                text: 'CHINATOWN',
                font: 'thin'
            }
        ]
    },
    1902: {
        renderType: '190-variant',
        serviceNumber: '190',
        serviceFont: 'full',
        destination: {
            text: 'CHOA CHU KANG',
            font: 'thin'
        },
        scrolls: [
            {
                text: ['CHOA CHU KANG', 'INT / MRT / LRT'],
                font: 'thick',
                showDest: false
            },
            {
                text: 'HILL STREET',
                font: 'thin'
            },
            {
                text: 'SOMERSET ROAD',
                font: 'thin'
            },
            {
                text: 'SCOTTS ROAD',
                font: 'thin'
            },
            {
                text: 'STEVENS ROAD',
                font: 'thin'
            },
            {
                text: 'BUKIT PANJANG RD',
                font: 'thin'
            }
        ]
    }
}

EDSExtraMessageSet['SMRT'] = {
    1: {
        text: ['MERRY CHRISTMAS', 'HAPPY NEW YEAR'],
        font: 'thick',
        align: 'centre',
        yPos: [9, 0]
    },
    2: {
        text: 'GONG XI FA CAI',
        font: 'full',
        align: 'centre',
        yPos: 0
    },
    3: {
        text: 'SELAMAT HARI RAYA',
        font: 'big',
        align: 'centre',
        yPos: 1
    },
    4: {
        text: ['HAPPY', 'DEEPAVALI'],
        font: 'thick',
        align: 'centre',
        yPos: [9, 0]
    },
    5: {
        text: ['EZ READER OUT OF ORDER', 'PLEASE PAY CASH'],
        font: 'thin',
        align: 'centre',
        yPos: [9, 0]
    },
    6: {
        text: 'LAST BUS',
        font: 'full',
        align: 'centre',
        yPos: 0
    }
}

EDSImageSet['SMRT'] = {
    logo: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
}
