import React from "react";
import {
    Grid,
    Box,
    Typography,
    Button,
    Card,
    CardContent,
    Paper
} from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import Image from "next/image";
import stylesInfo from "../../styles/info/info.module.css";
import BackgroundImage from "@/components/background-image";
import { useEffect, useState, useRef } from "react";
// import styles from "../../styles/style.module.css";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/style.module.css";

const Policy = () => {
    const data = [
        {
            "Client Information": [
                {
                    "Channel": "DigitalBroker",
                    "Label": "2000",
                    "Intermediary": "2000",
                    "FirstName": "Jacques",
                    "LastName": "Chirac",
                    "MobilePhoneNumber": "0471121315",
                    "TelePhoneNumber": null,
                    "Email": "pohdum@jj.bjn",
                    "Street": "Lage Kaart",
                    "StreetNumber": "682",
                    "City": "Brasschaat",
                    "PostalCode": "2930",
                    "PartyRk": "6C48794C56C9F16869E8953357CAED529CDB6C58",
                    "BirthDate": "05-09-1958"
                }
            ]
        },
        {
            "PolicySituation": "The client has 7 active policy/policies: 3 vehicle/moto policy/policies, 1 Home policy/policies, 1 Family policy/policies and 2 Home and family policy/policies. "
        },
        {
            "CurrentPolicies": [
                {
                    "Channel": "9148",
                    "Label": "ING",
                    "Intermediary": "ING",
                    "PolicyNumber": "60112548",
                    "PolicyVersionNumber": "1",
                    "PolicyVersionStartDate": "08-09-2023",
                    "PolicyVersionEndDate": null,
                    "PolicyType": "Car",
                    "InsuranceProduct": "car",
                    "GrossWrittenPremium": "408.24",
                    "PolicyModificationDate": "08-09-2023 09:20",
                    "MutationType": "New business",
                    "MutationTypeReason": null,
                    "PolicyStatus": "Active",
                    "TermsAndCondition": "CARP2V3",
                    "Vehicles": [
                        {
                            "Make": "CITROEN",
                            "Model": "C3 AIRCROSS",
                            "ModelType": "1.2PT81 SHINE",
                            "Year": "2023",
                            "FuelType": "Gasoline/Petrol",
                            "VIN": "1FTMF1EF9DKF87019",
                            "LicensePlate": null,
                            "VehicleUsage": "Private & Work",
                            "VehicleType": "CAR",
                            "UsedVehicleInvoiceValue": null,
                            "InitialRegistrationDate": null,
                            "Oldtimer": null,
                            "YearlyDistanceTravelled": "30000"
                        }
                    ],
                    "Buildings": [],
                    "PartyRoles": [
                        "Main driver",
                        "Policy holder"
                    ],
                    "Coverages": [
                        {
                            "Coverage": "Civil liability (Vehicle)",
                            "AnnualPremiumAmount": "321.12"
                        }
                    ]
                },
                {
                    "Channel": "9148",
                    "Label": "ING",
                    "Intermediary": "ING",
                    "PolicyNumber": "60112547",
                    "PolicyVersionNumber": "1",
                    "PolicyVersionStartDate": "08-09-2023",
                    "PolicyVersionEndDate": null,
                    "PolicyType": "Car",
                    "InsuranceProduct": "car",
                    "GrossWrittenPremium": "342.60",
                    "PolicyModificationDate": "08-09-2023 09:21",
                    "MutationType": "New business",
                    "MutationTypeReason": null,
                    "PolicyStatus": "Active",
                    "TermsAndCondition": "CARP2V3",
                    "Vehicles": [
                        {
                            "Make": "VOLKSWAGEN",
                            "Model": "POLO",
                            "ModelType": "1.0TSI70 LIFE",
                            "Year": "2022",
                            "FuelType": "Gasoline/Petrol",
                            "VIN": "JM3KE4CE3D0161075",
                            "LicensePlate": null,
                            "VehicleUsage": "Private & Work",
                            "VehicleType": "CAR",
                            "UsedVehicleInvoiceValue": null,
                            "InitialRegistrationDate": null,
                            "Oldtimer": null,
                            "YearlyDistanceTravelled": "10000"
                        }
                    ],
                    "Buildings": [],
                    "PartyRoles": [
                        "Policy holder",
                        "Main driver"
                    ],
                    "Coverages": [
                        {
                            "Coverage": "Civil liability (Vehicle)",
                            "AnnualPremiumAmount": "269.52"
                        }
                    ]
                },
                {
                    "Channel": "9148",
                    "Label": "ING",
                    "Intermediary": "ING",
                    "PolicyNumber": "60112550",
                    "PolicyVersionNumber": "1",
                    "PolicyVersionStartDate": "08-09-2023",
                    "PolicyVersionEndDate": null,
                    "PolicyType": "Motor/Moped",
                    "InsuranceProduct": "motor",
                    "GrossWrittenPremium": "194.52",
                    "PolicyModificationDate": "08-09-2023 09:27",
                    "MutationType": "New business",
                    "MutationTypeReason": null,
                    "PolicyStatus": "Active",
                    "TermsAndCondition": "General Terms and Conditions Motor (ING Assurance Moto et Cyclo)",
                    "Vehicles": [
                        {
                            "Make": "Yamaha",
                            "Model": "R1",
                            "ModelType": null,
                            "Year": "2018",
                            "FuelType": "Gasoline/Petrol",
                            "VIN": "1FMHK7D90CGA42996",
                            "LicensePlate": null,
                            "VehicleUsage": "Private & Work",
                            "VehicleType": "MOTORCYCLE",
                            "UsedVehicleInvoiceValue": null,
                            "InitialRegistrationDate": "01-01-2018",
                            "Oldtimer": null,
                            "YearlyDistanceTravelled": "4000"
                        }
                    ],
                    "Buildings": [],
                    "PartyRoles": [
                        "Main driver",
                        "Policy holder"
                    ],
                    "Coverages": [
                        {
                            "Coverage": "Civil liability (Vehicle)",
                            "AnnualPremiumAmount": "153.00"
                        }
                    ]
                },
                {
                    "Channel": "9148",
                    "Label": "ING",
                    "Intermediary": "ING",
                    "PolicyNumber": "60112546",
                    "PolicyVersionNumber": "2",
                    "PolicyVersionStartDate": "08-09-2023",
                    "PolicyVersionEndDate": null,
                    "PolicyType": "Home & Family",
                    "InsuranceProduct": "homeAndFamilyP2",
                    "GrossWrittenPremium": "1197.60",
                    "PolicyModificationDate": "11-09-2023 11:11",
                    "MutationType": "Change object and guarantees",
                    "MutationTypeReason": null,
                    "PolicyStatus": "Active",
                    "TermsAndCondition": "HNFP2V1",
                    "Vehicles": [],
                    "Buildings": [
                        {
                            "BuildingType": "Open building (house)",
                            "RoleInhabitant": "Owner"
                        }
                    ],
                    "PartyRoles": [
                        "Insured person",
                        "Policy holder"
                    ],
                    "Coverages": [
                        {
                            "Coverage": "Civil liability (Contents)",
                            "AnnualPremiumAmount": "0.60"
                        },
                        {
                            "Coverage": "Civil liability (Building)",
                            "AnnualPremiumAmount": "1.92"
                        },
                        {
                            "Coverage": "Legal assistance (Contents)",
                            "AnnualPremiumAmount": "4.08"
                        },
                        {
                            "Coverage": "Legal assistance (Building)",
                            "AnnualPremiumAmount": "12.36"
                        },
                        {
                            "Coverage": "Natural disasters (Contents)",
                            "AnnualPremiumAmount": "40.20"
                        },
                        {
                            "Coverage": "Storm (Building)",
                            "AnnualPremiumAmount": "177.96"
                        },
                        {
                            "Coverage": "Basic (Contents)",
                            "AnnualPremiumAmount": "78.12"
                        },
                        {
                            "Coverage": "Natural disasters (Building)",
                            "AnnualPremiumAmount": "114.36"
                        },
                        {
                            "Coverage": "Basic (Building)",
                            "AnnualPremiumAmount": "393.96"
                        },
                        {
                            "Coverage": "Assistance (Contents)",
                            "AnnualPremiumAmount": "0.24"
                        },
                        {
                            "Coverage": "Assistance (Building)",
                            "AnnualPremiumAmount": "3.48"
                        },
                        {
                            "Coverage": "Theft",
                            "AnnualPremiumAmount": "142.44"
                        },
                        {
                            "Coverage": "Legal assistance (Base)",
                            "AnnualPremiumAmount": "15.12"
                        },
                        {
                            "Coverage": "Civil liability (Family)",
                            "AnnualPremiumAmount": "54.96"
                        }
                    ]
                },
                {
                    "Channel": "ING",
                    "Label": "ING",
                    "Intermediary": "ING",
                    "PolicyNumber": "60113287",
                    "PolicyVersionNumber": "1",
                    "PolicyVersionStartDate": "11-09-2023",
                    "PolicyVersionEndDate": null,
                    "PolicyType": "Home & Family",
                    "InsuranceProduct": "homeAndFamilyP2",
                    "GrossWrittenPremium": "463.08",
                    "PolicyModificationDate": "11-09-2023 15:16",
                    "MutationType": "New business",
                    "MutationTypeReason": null,
                    "PolicyStatus": "Active",
                    "TermsAndCondition": "HNFP2V1",
                    "Vehicles": [],
                    "Buildings": [
                        {
                            "BuildingType": "Half-open building (house)",
                            "RoleInhabitant": "Owner"
                        }
                    ],
                    "PartyRoles": [
                        "Policy holder",
                        "Insured person"
                    ],
                    "Coverages": [
                        {
                            "Coverage": "Assistance (Building)",
                            "AnnualPremiumAmount": "3.48"
                        },
                        {
                            "Coverage": "Civil liability (Building)",
                            "AnnualPremiumAmount": "1.92"
                        },
                        {
                            "Coverage": "Legal assistance (Building)",
                            "AnnualPremiumAmount": "12.36"
                        },
                        {
                            "Coverage": "Garden",
                            "AnnualPremiumAmount": "38.88"
                        },
                        {
                            "Coverage": "Storm (Building)",
                            "AnnualPremiumAmount": "61.44"
                        },
                        {
                            "Coverage": "Natural disasters (Building)",
                            "AnnualPremiumAmount": "58.32"
                        },
                        {
                            "Coverage": "Basic (Building)",
                            "AnnualPremiumAmount": "158.28"
                        },
                        {
                            "Coverage": "Legal assistance (Base)",
                            "AnnualPremiumAmount": "15.12"
                        },
                        {
                            "Coverage": "Civil liability (Family)",
                            "AnnualPremiumAmount": "54.96"
                        }
                    ]
                },
                {
                    "Channel": "9148",
                    "Label": "ING",
                    "Intermediary": "ING",
                    "PolicyNumber": "60114012",
                    "PolicyVersionNumber": "1",
                    "PolicyVersionStartDate": "19-09-2023",
                    "PolicyVersionEndDate": null,
                    "PolicyType": "Home",
                    "InsuranceProduct": "homeAndFamilyP2",
                    "GrossWrittenPremium": "133.08",
                    "PolicyModificationDate": "19-09-2023 11:35",
                    "MutationType": "New business",
                    "MutationTypeReason": null,
                    "PolicyStatus": "Active",
                    "TermsAndCondition": "HNFP2V1",
                    "Vehicles": [],
                    "Buildings": [
                        {
                            "BuildingType": "Ground floor apartment",
                            "RoleInhabitant": "Owner"
                        }
                    ],
                    "PartyRoles": [
                        "Policy holder",
                        "Insured person"
                    ],
                    "Coverages": [
                        {
                            "Coverage": "Assistance (Contents)",
                            "AnnualPremiumAmount": "0.24"
                        },
                        {
                            "Coverage": "Civil liability (Contents)",
                            "AnnualPremiumAmount": "0.60"
                        },
                        {
                            "Coverage": "Garden",
                            "AnnualPremiumAmount": "38.88"
                        },
                        {
                            "Coverage": "Natural disasters (Contents)",
                            "AnnualPremiumAmount": "20.04"
                        },
                        {
                            "Coverage": "Basic (Contents)",
                            "AnnualPremiumAmount": "55.32"
                        }
                    ]
                },
                {
                    "Channel": "9148",
                    "Label": "ING",
                    "Intermediary": "ING",
                    "PolicyNumber": "60114236",
                    "PolicyVersionNumber": "1",
                    "PolicyVersionStartDate": "20-09-2023",
                    "PolicyVersionEndDate": null,
                    "PolicyType": "Family",
                    "InsuranceProduct": "homeAndFamilyP2",
                    "GrossWrittenPremium": "94.56",
                    "PolicyModificationDate": "20-09-2023 09:48",
                    "MutationType": "New business",
                    "MutationTypeReason": null,
                    "PolicyStatus": "Active",
                    "TermsAndCondition": "HNFP2V1",
                    "Vehicles": [],
                    "Buildings": [],
                    "PartyRoles": [
                        "Insured person",
                        "Policy holder"
                    ],
                    "Coverages": [
                        {
                            "Coverage": "Legal assistance (Base)",
                            "AnnualPremiumAmount": "15.12"
                        },
                        {
                            "Coverage": "Civil liability (Family)",
                            "AnnualPremiumAmount": "54.96"
                        },
                        {
                            "Coverage": "Legal assistance (Family)",
                            "AnnualPremiumAmount": "16.44"
                        },
                        {
                            "Coverage": "Legal assistance (Base)",
                            "AnnualPremiumAmount": "15.12"
                        },
                        {
                            "Coverage": "Civil liability (Family)",
                            "AnnualPremiumAmount": "54.96"
                        },
                        {
                            "Coverage": "Legal assistance (Family)",
                            "AnnualPremiumAmount": "16.44"
                        }
                    ]
                }
            ]
        },
        {
            "ClaimsSituation": "The client has 4 open claims on their policy/policies."
        },
        [
            {
                "PolicyNumber": "60112548",
                "ClaimNumber": "103-07-50228",
                "ClaimState": "Open",
                "ClaimHandler": "-",
                "ClaimBranch": "Bodily Injury",
                "ClaimCreateDate": "2023-09-08",
                "ClaimLossDate": "2023-09-08",
                "ClaimReportedDate": "2023-09-08",
                "ClaimCloseDate": null,
                "ClaimCloseOutcome": null,
                "ClaimReopenReason": null,
                "ReportedThrough": null,
                "ReportedByType": "Self",
                "LossCause": "Collision",
                "DamTypes": [
                    {
                        "DamageType": "Vehicle Or Motor Vehicle"
                    }
                ],
                "LossLocat": {
                    "Street": null,
                    "City": null,
                    "MailboxNbr": null,
                    "AddressNbr": null,
                    "PostalCode": null,
                    "Country": "Belgium"
                }
            },
            {
                "PolicyNumber": "60112547",
                "ClaimNumber": "103-07-50131",
                "ClaimState": "Open",
                "ClaimHandler": "-",
                "ClaimBranch": "Bodily Injury",
                "ClaimCreateDate": "2023-09-08",
                "ClaimLossDate": "2023-09-08",
                "ClaimReportedDate": "2023-09-08",
                "ClaimCloseDate": null,
                "ClaimCloseOutcome": null,
                "ClaimReopenReason": null,
                "ReportedThrough": null,
                "ReportedByType": "Self",
                "LossCause": "Collision",
                "DamTypes": [
                    {
                        "DamageType": "Vehicle Or Motor Vehicle"
                    }
                ],
                "LossLocat": {
                    "Street": null,
                    "City": null,
                    "MailboxNbr": null,
                    "AddressNbr": null,
                    "PostalCode": null,
                    "Country": "Belgium"
                }
            },
            {
                "PolicyNumber": "60112550",
                "ClaimNumber": "103-07-50422",
                "ClaimState": "Open",
                "ClaimHandler": "-",
                "ClaimBranch": "Bodily Injury",
                "ClaimCreateDate": "2023-09-08",
                "ClaimLossDate": "2023-09-08",
                "ClaimReportedDate": "2023-09-08",
                "ClaimCloseDate": null,
                "ClaimCloseOutcome": null,
                "ClaimReopenReason": null,
                "ReportedThrough": null,
                "ReportedByType": "Self",
                "LossCause": "Collision",
                "DamTypes": [
                    {
                        "DamageType": "Vehicle Or Motor Vehicle"
                    }
                ],
                "LossLocat": {
                    "Street": null,
                    "City": null,
                    "MailboxNbr": null,
                    "AddressNbr": null,
                    "PostalCode": null,
                    "Country": "Belgium"
                }
            },
            {
                "PolicyNumber": "60112546",
                "ClaimNumber": "103-07-50034",
                "ClaimState": "Open",
                "ClaimHandler": "Sevdan-Hyuseinova",
                "ClaimBranch": "Fire",
                "ClaimCreateDate": "2023-09-08",
                "ClaimLossDate": "2023-09-08",
                "ClaimReportedDate": "2023-09-08",
                "ClaimCloseDate": null,
                "ClaimCloseOutcome": null,
                "ClaimReopenReason": null,
                "ReportedThrough": null,
                "ReportedByType": "Self",
                "LossCause": "Water Damage",
                "DamTypes": [
                    {
                        "DamageType": "Glass Break"
                    }
                ],
                "LossLocat": {
                    "Street": "Lage Kaart",
                    "City": "Brasschaat",
                    "MailboxNbr": null,
                    "AddressNbr": "682",
                    "PostalCode": "2930",
                    "Country": "Belgium"
                }
            }
        ],
        {
            "UpsellOpportunities": [
                {
                    "ApplicableForPolicy": "60112548",
                    "ProbabilityToMaterialize": "40%",
                    "RuleTranslateTo": "Policy 60112548 covers a recent car but without Mini-Omnium nor Omnium. It is recommended to have a better coverage for a recent car. Propose to upgrade to Mini-Omnium or Omnium to the client.",
                    "DetailedRationales": "The value of the insured vehicle is still high. In order to protect the client from financial loss, it is recommended to upgrade the policy with a Mini-Omnium or full Omnium option. These options provide extended protect to the vehicle and financially better protect the client. A full Omnium will even protect the client in case he causes damages to his own car."
                },
                {
                    "ApplicableForPolicy": "60112547",
                    "ProbabilityToMaterialize": "40%",
                    "RuleTranslateTo": "Policy 60112547 covers a recent car but without Mini-Omnium nor Omnium. It is recommended to have a better coverage for a recent car. Propose to upgrade to Mini-Omnium or Omnium to the client.",
                    "DetailedRationales": "The value of the insured vehicle is still high. In order to protect the client from financial loss, it is recommended to upgrade the policy with a Mini-Omnium or full Omnium option. These options provide extended protect to the vehicle and financially better protect the client. A full Omnium will even protect the client in case he causes damages to his own car."
                },
                {
                    "ApplicableForPolicy": "60112550",
                    "ProbabilityToMaterialize": "40%",
                    "RuleTranslateTo": "Policy 60112550 covers a recent car but without Mini-Omnium nor Omnium. It is recommended to have a better coverage for a recent motorbike. Propose to upgrade to Mini-Omnium or Omnium to the client.",
                    "DetailedRationales": "The value of the insured vehicle is still high. In order to protect the client from financial loss, it is recommended to upgrade the policy with a Mini-Omnium or full Omnium option. These options provide extended protect to the vehicle and financially better protect the client. A full Omnium will even protect the client in case he causes damages to his own vehicle."
                },
                {
                    "ApplicableForPolicy": "60114012",
                    "ProbabilityToMaterialize": "20%",
                    "RuleTranslateTo": "Policy 60114012 has no family coverage. Civil liability insurance is not mandatory in Belgium, but it is strongly recommended to avoid having to pay heavy compensation in case of damage caused to others.",
                    "DetailedRationales": "A civil liability insurance protects you if you cause damage to a person or their property by your fault, negligence or carelessness in the context of your private life. It compensates you for the repair or replacement costs of the damaged goods, as well as for the physical or moral damages suffered by the victim. It offers you financial protection and legal security in case of accident or incident."
                }
            ]
        },
        {
            "FinancialSituation": " All invoices are paid for policy ."
        },
        {
            "RecentChanges": "On 11-09-2023, the policy 60112546 was modified: 'Change object and guarantees'. "
        },
        {
            "VehiclePolicySimulationsOnTodaysDate": [
                {
                    "mobilityPremiumResponse": [
                        {
                            "Information": "These are the premium per coverage in case of a new contract on the same vehicle at start date of today.",
                            "policyNumber": "60112548",
                            "mobilityType": "Car",
                            "redExitMessages": [],
                            "validCodes": [],
                            "discountMessages": [],
                            "promoDetail": null,
                            "coverageDetails": [
                                {
                                    "paymentTerm": "Month",
                                    "coverages": [
                                        {
                                            "coverage": "Civil liability (Vehicle)",
                                            "premiumIncludingTaxes": 34.02,
                                            "premiumNoDiscountIncludingTaxes": 34.02
                                        },
                                        {
                                            "coverage": "Mini Omnium",
                                            "premiumIncludingTaxes": 19.38,
                                            "premiumNoDiscountIncludingTaxes": 19.38
                                        },
                                        {
                                            "coverage": "Omnium",
                                            "premiumIncludingTaxes": 43.31,
                                            "premiumNoDiscountIncludingTaxes": 43.31
                                        },
                                        {
                                            "coverage": "Premium protection",
                                            "premiumIncludingTaxes": 5.64,
                                            "premiumNoDiscountIncludingTaxes": 5.64
                                        },
                                        {
                                            "coverage": "Legal protection (Vehicle)",
                                            "premiumIncludingTaxes": 4.25,
                                            "premiumNoDiscountIncludingTaxes": 4.25
                                        },
                                        {
                                            "coverage": "Assistance (Belgium)",
                                            "premiumIncludingTaxes": 8.49,
                                            "premiumNoDiscountIncludingTaxes": 8.49
                                        },
                                        {
                                            "coverage": "Driver's coverage",
                                            "premiumIncludingTaxes": 6.29,
                                            "premiumNoDiscountIncludingTaxes": 6.29
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "mobilityPremiumResponse": [
                        {
                            "Information": "These are the premium per coverage in case of a new contract on the same vehicle at start date of today.",
                            "policyNumber": "60112547",
                            "mobilityType": "Car",
                            "redExitMessages": [],
                            "validCodes": [],
                            "discountMessages": [],
                            "promoDetail": null,
                            "coverageDetails": [
                                {
                                    "paymentTerm": "Month",
                                    "coverages": [
                                        {
                                            "coverage": "Civil liability (Vehicle)",
                                            "premiumIncludingTaxes": 28.55,
                                            "premiumNoDiscountIncludingTaxes": 28.55
                                        },
                                        {
                                            "coverage": "Mini Omnium",
                                            "premiumIncludingTaxes": 10.13,
                                            "premiumNoDiscountIncludingTaxes": 10.13
                                        },
                                        {
                                            "coverage": "Omnium",
                                            "premiumIncludingTaxes": 40.28,
                                            "premiumNoDiscountIncludingTaxes": 40.28
                                        },
                                        {
                                            "coverage": "Premium protection",
                                            "premiumIncludingTaxes": 5.64,
                                            "premiumNoDiscountIncludingTaxes": 5.64
                                        },
                                        {
                                            "coverage": "Legal protection (Vehicle)",
                                            "premiumIncludingTaxes": 4.25,
                                            "premiumNoDiscountIncludingTaxes": 4.25
                                        },
                                        {
                                            "coverage": "Assistance (Belgium)",
                                            "premiumIncludingTaxes": 8.49,
                                            "premiumNoDiscountIncludingTaxes": 8.49
                                        },
                                        {
                                            "coverage": "Driver's coverage",
                                            "premiumIncludingTaxes": 6.29,
                                            "premiumNoDiscountIncludingTaxes": 6.29
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
    const policyDetails = useSelector((state) => state.api.policyDetails);
    console.log(policyDetails, "policyDetails")
    const selectedUser = useSelector((state) => state.api.selectedUser);
    console.log(selectedUser, "selectedUser")
    const fullName = selectedUser?.FirstName + selectedUser?.Name;
    const partyFilter = policyDetails?.party?.filter(
        (p) => p.firstName + p.lastName === fullName
    );

    const themeinfo = createTheme({
        typography: {
            h2: {
                fontSize: 30,
                fontWeight: "bold",
            },
            h3: {
                fontSize: 24,
                fontWeight: "bold",
            },
            h5: {
                fontSize: 16,
                // fontWeight: "bold"
            },

        },
    });

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            [theme.breakpoints.up('sm')]: {
                fontSize: 20, // Adjust font size for smaller screens
                paddingLeft: "8px",
                paddingRight: "8px"
            },

            [theme.breakpoints.down('sm')]: {
                fontSize: 14, // Adjust font size for smaller screens
                paddingLeft: "1px",
                paddingRight: "1px",

            },
            backgroundColor: grey[600],
            color: theme.palette.common.white,
            border: "3px solid white",
            paddingTop: "6px",
            paddingBottom: "6px",
        },
        [`&.${tableCellClasses.body}`]:
        {
            // fontSize: 18,
            [theme.breakpoints.up('sm')]: {
                fontSize: 18, // Adjust font size for smaller screens
                paddingLeft: "8px",
                paddingRight: "8px"
            },

            [theme.breakpoints.down('sm')]: {
                fontSize: 14, // Adjust font size for smaller screens
                paddingLeft: "1px",
                paddingRight: "1px",

            },
            fontWeight: "bold",
            border: "3px solid white",
            paddingTop: "4px",
            paddingBottom: "4px",
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: grey[300],

        },
        '&:nth-of-type(even)': {
            backgroundColor: grey[100],
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            // border: 0,
            // backgroundColor: grey[900],
        },
    }));
    console.log(data, "data")
    const VehiclePolicySimulationsOnTodaysDate = data[8].VehiclePolicySimulationsOnTodaysDate
    const CurrentPolicies = data[2].CurrentPolicies
    console.log(CurrentPolicies, "CurrentPolicies")
    // const policyNumber = policyDetails?.policy?.policyNumber
    const policyNumber = "60112548"
    console.log(policyNumber, "policyNumber")
    const resultItem = VehiclePolicySimulationsOnTodaysDate.find(item => item.mobilityPremiumResponse && item.mobilityPremiumResponse[0].policyNumber === policyNumber);
    const resultItem2 = CurrentPolicies.find(item => item && item.PolicyNumber === policyNumber).Coverages;
    console.log(resultItem2, "resultItem2")
    const mobilityPremiumResponse = resultItem.mobilityPremiumResponse[0].coverageDetails[0].coverages
    console.log(mobilityPremiumResponse, "mobilityPremiumResponse")
    const coverageArray = mobilityPremiumResponse.map(cov => {
        const coverageType = cov.coverage
        const proposal = cov.premiumNoDiscountIncludingTaxes.toString()
        // const prop = resultItem2.map(item => {
        //     if (cov.coverage === item.Coverage) {
        //         return item.AnnualPremiumAmount
        //     }
        //     else{
        //         return ""
        //     }
        // })
        const prop = resultItem2.find(item => item.Coverage === cov.coverage)?.AnnualPremiumAmount || ""
        const situation = prop
        return { coverageType, proposal, situation }
    })
    console.log(coverageArray, "coverageArray")

    function createData(coverage, situation, proposal,) {
        return { coverage, situation, proposal };
    }
    const rows = coverageArray;
    console.log(rows, "rows")
    const [ptotal, setPtotal] = useState(0)
    const [ctotal, setCtotal] = useState(0)


    return (
        <ThemeProvider theme={themeinfo}>
            <Grid>
                <BackgroundImage props={true} />
                <Box
                    sx={{
                        mx: "auto",
                        width: { xs: "96%", md: "100%", sm: "95%" },
                        overflow: "auto",
                        height: "100vh",

                    }}
                    border="0px solid green"
                    style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        top: 80,
                        bottom: 60,
                        margin: "auto",
                        boxSizing: "border-box"
                    }}
                >
                    <Box sx={{ mt: 4, display: "flex", flexDirection: { xs: "column", md: "row" }, boxSizing: "border-box" }}
                        border="0px solid pink">
                        {/* first block */}
                        <Box sx={{ width: { xs: "100%", md: "60vw" }, display: "flex", justifyContent: "center", alignItems: "center" }}
                            border="0px solid purple">
                            <Box sx={{
                                width: { xs: "100%", sm: "90%" }, borderRadius: "18px", py: 3, mb: 3,
                                display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"
                            }}
                                component={Paper} border="0px solid orange">
                                <Typography variant="h2" sx={{ width: "90%" }} border="0px solid orange">Policy Coverages Analysis</Typography>
                                <Typography variant="h5" sx={{
                                    width: "100%",
                                    mr: { sm: 26, xs: 14 },
                                    marginBottom: "1px", display: "flex", justifyContent: "flex-end"
                                }}
                                    border="0px solid orange">
                                    In monthly prices
                                </Typography>
                                <TableContainer sx={{ display: "flex", justifyContent: "center", width: { xs: "100%", sm: "90%" } }} border="0px solid pink">
                                    <Table component={Paper} aria-label="customized table" >
                                        <TableHead>
                                            <TableRow>
                                                <StyledTableCell align="left">Coverage</StyledTableCell>
                                                <StyledTableCell align="center">Current situation</StyledTableCell>
                                                <StyledTableCell align="center">Proposal</StyledTableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>

                                            {rows.map((row) => {
                                                const [checked, setChecked] = useState(false);
                                                const onSelectClick = (event) => {
                                                    console.log(row, "row")
                                                    setChecked(event.target.checked);
                                                    const newNumber1 = parseFloat(row.proposal.replaceAll(',', ''))
                                                    const newNumber2 = parseFloat(row.situation?.replaceAll(',', ''))
                                                    if (event.target.checked) {
                                                        setPtotal(ptotal + newNumber1)
                                                        setCtotal(ctotal + (newNumber2 ? newNumber2 : 0))
                                                    }
                                                    else {
                                                        setPtotal(ptotal - newNumber1)
                                                        setCtotal(ctotal - (newNumber2 ? newNumber2 : 0))
                                                    }
                                                    console.log(ptotal, "total")
                                                }
                                                const newNumber2 = parseFloat(row.proposal.replaceAll(',', ''))
                                                const newNumber1 = parseFloat(row.situation?.replaceAll(',', ''))
                                                console.log(newNumber1, newNumber2, newNumber1 > newNumber2)

                                                return (
                                                    <StyledTableRow key={row.coverage}>
                                                        <StyledTableCell align="left">
                                                            {row.coverageType}
                                                        </StyledTableCell>
                                                        <StyledTableCell align="right">{row.situation}</StyledTableCell>
                                                        <StyledTableCell align="right">
                                                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                                                <Box>
                                                                    {newNumber1 ?
                                                                        newNumber1 > newNumber2 ?
                                                                            <Image
                                                                                src="/images/downArrow.png"
                                                                                width={20}
                                                                                height={20}
                                                                                alt="Picture of the author"
                                                                            /> : <Image
                                                                                src="/images/equalTo.png"
                                                                                width={20}
                                                                                height={20}
                                                                                alt="Picture of the author"
                                                                            /> : <Image
                                                                            src="/images/upArrow.png"
                                                                            width={20}
                                                                            height={20}
                                                                            alt="Picture of the author"
                                                                        />}
                                                                </Box>
                                                                <Box>{row.proposal}</Box>
                                                            </Box>
                                                        </StyledTableCell>
                                                        <StyledTableCell padding="checkbox" component={Paper} >
                                                            <Checkbox
                                                                color="primary"
                                                                // indeterminate={numSelected > 0 && numSelected < rowCount}
                                                                // checked={rowCount > 0 && numSelected === rowCount}
                                                                checked={checked}
                                                                onChange={onSelectClick}
                                                                inputProps={{
                                                                    'aria-label': 'select all desserts',
                                                                }}
                                                            />
                                                        </StyledTableCell>
                                                    </StyledTableRow>
                                                )
                                            })}
                                        </TableBody>
                                        <TableHead>
                                            <StyledTableRow>
                                                <StyledTableCell align="left">Total</StyledTableCell>
                                                <StyledTableCell align="right">{ctotal.toLocaleString("en-US")}</StyledTableCell>
                                                <StyledTableCell align="right">{ptotal.toLocaleString("en-US")}</StyledTableCell>
                                            </StyledTableRow>
                                        </TableHead>
                                    </Table>
                                </TableContainer>
                            </Box>
                        </Box>

                        {/* Second Block */}
                        <Box sx={{ width: { xs: "100%", md: "40vw" }, display: "flex", flexDirection: "column", alignItems: "center" }}
                            border="0px solid orange">
                            {policyDetails?.building?.length > 0 &&
                                <Card
                                    sx={{
                                        my: { xs: 2, sm: 0 },
                                        width: { xs: "90%", sm: "88%", md: "80%", },
                                        height: { lg: "26vh", md: "42vh", sm: "58vh" },
                                        display: "flex",
                                        flexDirection: { xs: "column", md: "row" },
                                        borderRadius: "24px",
                                        pt: 2,
                                        pl: { xs: 1 },
                                        pb: 1,
                                        pr: 2,
                                        mb: 2
                                    }}
                                >
                                    <CardContent
                                        className={styles.cardContent}
                                        sx={{ width: { md: "60%", xs: "100%" } }}
                                    >
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                mb: 2,
                                            }}
                                        >
                                            <Image
                                                src="/images/home.svg"
                                                width={50}
                                                height={50}
                                                alt="Picture of the author"
                                            />
                                            <Box sx={{ ml: 1 }}>
                                                <Typography
                                                    sx={{
                                                        ml: 1,
                                                        fontWeight: "bold",
                                                        fontSize: { xs: 20, md: 22, sm: 20 },
                                                    }}
                                                >
                                                    {policyDetails?.policy?.policyType}
                                                </Typography>
                                                <Typography
                                                    variant="h5"
                                                    sx={{ cursor: "pointer", zIndex: 9 }}
                                                // onClick={() =>
                                                //     // handleImageClick(policy, index)
                                                // }
                                                >
                                                    {policyDetails?.policy?.policyNumber}
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Typography
                                            variant="h5"
                                            sx={{ pb: 1, pl: 2 }}
                                            border="0px solid green"
                                        >
                                            {policyDetails?.building[0]?.street}{" "}
                                            {policyDetails?.building[0]?.streetNumber},{" "}
                                            {policyDetails?.building[0]?.city}
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            sx={{ pl: 2, mb: { xs: 2, md: 0 } }}
                                        >
                                            {policyDetails?.policy?.policyStartDate} –{" "}
                                            {policyDetails?.policy?.policyEndDate}
                                        </Typography>
                                    </CardContent>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            pt: 1,
                                            height: {
                                                xs: "15vh",
                                                md: "26vh",
                                                sm: "15vh",
                                            },
                                            overflowY: "auto",
                                            md: 6,
                                        }}
                                        border="0px solid green"
                                    >
                                        {partyFilter?.map((cov, index) => (
                                            <Button
                                                variant="contained"
                                                xs={12}
                                                sx={{
                                                    mb: 1,
                                                    height: "26px",
                                                    fontSize: "8px",
                                                    backgroundColor: grey[600],
                                                    width: "100%",
                                                }}
                                            >
                                                {cov.partyRole}
                                            </Button>
                                        ))}
                                        {policyDetails?.building[0]?.coverage.map((cov, index) => (
                                            <Button
                                                key={index}
                                                variant="contained"
                                                sx={{
                                                    mb: 1,
                                                    height: "26px",
                                                    fontSize: "8px",
                                                    backgroundColor: grey[900],
                                                    width: "100%",
                                                }}
                                            >
                                                {cov.coverageType}
                                            </Button>
                                        ))}
                                    </Box>
                                </Card>}
                            {policyDetails?.vehicle?.length > 0 &&
                                <Card
                                    sx={{
                                        my: { xs: 2, sm: 0 },
                                        width: { xs: "90%", sm: "88%", md: "80%", },
                                        height: { lg: "26vh", md: "42vh", sm: "58vh" },
                                        display: "flex",
                                        flexDirection: { xs: "column", md: "row" },
                                        borderRadius: "24px",
                                        pt: 2,
                                        pl: { xs: 1 },
                                        pb: 1,
                                        pr: 2,
                                        mb: 2
                                    }}
                                >
                                    <CardContent
                                        className={styles.cardContent}
                                        sx={{ width: { md: "60%", xs: "100%" } }}
                                        border="0px solid green"
                                    >
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                mb: 2,
                                            }}
                                            border="0px solid green"
                                        >
                                            <Image
                                                src="/images/car.svg"
                                                width={60}
                                                height={60}
                                                alt="Picture of the Car"
                                            />
                                            <Box sx={{ ml: 1 }} border="0px solid green">
                                                <Typography
                                                    sx={{
                                                        fontWeight: "bold",
                                                        fontSize: { xs: 20, md: 22, sm: 20 },
                                                        maxWidth: "60%",
                                                        overflow: "hidden",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                    }}
                                                >
                                                    {policyDetails?.policy?.policyType}
                                                </Typography>
                                                <Typography
                                                    variant="h5"
                                                    sx={{ cursor: "pointer", zIndex: 9 }}
                                                //   onClick={() =>
                                                //     handleImageClick(policy, index)
                                                //   }
                                                >
                                                    {policyDetails?.policy?.policyNumber}
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Typography variant="h5" sx={{ pl: 2, pb: 1 }}>
                                            {policyDetails?.vehicle[0]?.make}{" "}
                                            {policyDetails?.vehicle[0]?.model}
                                        </Typography>
                                        <Typography variant="h5" sx={{ pl: 2, pb: 1 }}>
                                            {policyDetails?.vehicle[0]?.licensePlate}
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            sx={{ pl: 2, pb: 1, mb: { xs: 2, md: 0 } }}
                                        >
                                            {policyDetails?.policy?.policyStartDate} –{" "}
                                            {policyDetails?.policy?.policyEndDate}
                                        </Typography>
                                    </CardContent>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            pt: 1,
                                            height: {
                                                xs: "15vh",
                                                md: "26vh",
                                                sm: "15vh",
                                            },
                                            overflowY: "auto",
                                        }}
                                        border="0px solid green"
                                    >
                                        {policyDetails?.party.map((cov, index) => (
                                            <Button
                                                key={index}
                                                variant="contained"
                                                xs={12}
                                                sx={{
                                                    mb: 1,
                                                    height: "26px",
                                                    fontSize: "8px",
                                                    backgroundColor: grey[600],
                                                    width: "100%",
                                                }}
                                            >
                                                {cov.partyRole}
                                            </Button>
                                        ))}

                                        {policyDetails.vehicle[0].coverage.map((cov, index) => (
                                            <Button
                                                key={index}
                                                variant="contained"
                                                sx={{
                                                    mb: 1,
                                                    height: "26px",
                                                    fontSize: "8px",
                                                    backgroundColor: grey[900],
                                                    width: "100%",
                                                }}
                                            >
                                                {cov.coverageType}
                                            </Button>
                                        ))}
                                    </Box>
                                </Card>}
                            <Card
                                className={styles.card}
                                sx={{
                                    width: { xs: "90%", sm: "88%", md: "80%", },
                                    height: { lg: "22vh", md: "26vh", sm: "40vh" },
                                    borderRadius: "24px",
                                    pt: 2,
                                    pl: { xs: 2 },
                                    pb: { md: 0, sm: 1, xs: 1 },
                                    pr: 2,
                                    ml: { xs: 0 },
                                    mb: "19px",
                                    mt: 4,
                                }}
                            >
                                <Typography variant="h3" sx={{ mb: 1 }}>
                                    {/* {item.title} */}
                                    Attention Points
                                </Typography>
                                <CardContent
                                    sx={{ height: "10vh", overflowY: "auto" }}
                                >
                                    {/* {item.bot.map((comment) => {
                                return (
                                    );
                              })} */}
                                    <Box sx={{ display: "flex" }}>
                                        <Image
                                            src="/images/back.svg"
                                            width={30}
                                            height={30}
                                            alt="Picture of the back"
                                        />
                                        <Typography variant="h5" sx={{ pl: 0 }}>
                                            {/* {comment} */}
                                            Remin the client to pay his invoice for his H&F Policy
                                        </Typography>
                                    </Box>

                                </CardContent>
                            </Card>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </ThemeProvider>
    );
};

export default Policy;
