import { gql } from '@apollo/client';

export const GET_DATA = gql`
query{
    graphQLForPolicyEvent(policyNumber:"60055287",policyVersion:"",
              licensePlate:"",
              lastName:"",
              firstName:"",
              vatNumber:"",
              dateOfApplication:"",
              partyRk:"",partyId:"",channelToken:"yY?rMDlr0BRfjabhi3kqGBxXau=5uNJ0L1He2fNlBPmTEijf50F0ks4u11khoHyH")
  {
   
    policy {
      policyID
      insuranceProduct
      policyEffectiveDate
      policyNumber
      policyVersionNumber
      policyType
      policyStartDate
      policyVersionStartDate
      policyEndDate
      
    }
    party {
      partyRole
      partyType
      
      address {
        addressType
        fullAddress
       
      }
     
    }
    vehicle {
      coverage {
        insuredAmount
        effectiveDate
        expirationDate
        coverageType
        annualCommissionAmount
        annualPremiumAmount
        annualNIP
        annualTax
        abexIndex
        deductibleType
        deductibleAmount
        deductiblePercentage
      }
    }
    family {
       familyCompositionFire
       firstName
       lastName
       coverage {
           insuredAmount
        effectiveDate
        expirationDate
        coverageType
        annualCommissionAmount
        annualPremiumAmount
        annualNIP
        annualTax
        abexIndex
        deductibleType
        deductibleAmount
        deductiblePercentage
        ####insuredAmt
      }
    }
    building {    
      coverage {
          insuredAmount
        effectiveDate
        expirationDate
        coverageType
        annualCommissionAmount
        annualPremiumAmount
        annualNIP
        annualTax
        abexIndex
        deductibleType
        deductibleAmount
        deductiblePercentage
        ####insuredAmt
      }
    }
  }
  }
`;
