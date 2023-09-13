// apiSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define an initial state
const initialState = {
  loading: false,
  error: null,
  graphResponse: null,
 
};

// Create an async thunk for making the API request
export const fetchGraphResults = createAsyncThunk(
  "search/fetchGraphResults",
  async (query, { rejectWithValue }) => {
    const graphqlEndpoint = "https://acc.isbapim.be.insim.biz/goldenpolicydata";
    const authorizationToken =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL25ubmxiZWFwaWEub25taWNyb3NvZnQuY29tL2FwaSIsImlzcyI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzA0ZmY5MmUzLWM4YzgtNDdiYS1iODE4LTIyNzA0NWNlNjk2OS8iLCJpYXQiOjE2OTQ1ODE4MTksIm5iZiI6MTY5NDU4MTgxOSwiZXhwIjoxNjk0NTg1NzE5LCJhaW8iOiJFMkZnWUhqLzk4RytmZ1BWQWc5NXI3YURtMTY2QVFBPSIsImFwcGlkIjoiYzczMjU0NDMtNTliZi00Y2Q4LWExMTAtYzE1MzRkNTJjZGIxIiwiYXBwaWRhY3IiOiIxIiwiaWRwIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMDRmZjkyZTMtYzhjOC00N2JhLWI4MTgtMjI3MDQ1Y2U2OTY5LyIsIm9pZCI6ImQ1YzU5NjhlLTQwZTUtNGZlOC05ZmFiLTkwZTc1ODI3NWM0MyIsInJoIjoiMC5BU0lBNDVMX0JNakl1a2U0R0NKd1JjNXBhU0xOSWVEcjl1NUNtWFVqU0xfVlN6WWlBQUEuIiwic3ViIjoiZDVjNTk2OGUtNDBlNS00ZmU4LTlmYWItOTBlNzU4Mjc1YzQzIiwidGlkIjoiMDRmZjkyZTMtYzhjOC00N2JhLWI4MTgtMjI3MDQ1Y2U2OTY5IiwidXRpIjoidjdOaW5JVWxJRWlPRThKUy1fQURBQSIsInZlciI6IjEuMCJ9.Il-vmR1Lm2zYgmNJ3aXbNhDxgBJQB8NzxnW95jDDies9G7ugi5gG_kTJOoMNJ4938usxmVDFtwchwawFCX4dU9owY_a28QbDET-wLr2MsWJBtbx8ZrQBwvWa4y7GNZjA01plRdmpZR0DJboEVqPZj4wu0o3SNQ2TjKKpRTi920YpMTg2sem7G1kEcH18I43NVRkagmRGeRMVd_a5f4ewPdQpq6itYleh-YSnNLYEE3CxJGOXxclorDKImFB4eU3pLg3UosbTCRDMrNxZMpRUGKoIE0mpVyoT-W3hsj0p6ylcBIowl1BC-lYIbakY_GmQn1vaEuscPz0r_clUXGF-WA";
    const subscriptionKey = "a29328725599452c8fb2f098b5390925";

    const payload = {
        variables: {},

        query: `
    query{
      graphQLForPolicyEvent(policyNumber:"" ,partyRk:"7589EC6F59EF76CDA4F3A3E0B312F09B83B504DE",
      policyInfoWithDescription:true
       channelToken:"s8ocxbdCx-dIPFXAJcXNQko-!bYRU1H6aCel4YvOJ-POw1lWE8qm4fVMZJ/EIRSV")
    { 
      policy {
          policyID
          policyEndDate
        policyNumber
        policyVersionNumber
        policyType
        policyStartDate
        policyVersionStartDate
        policyVersionEndDate
        insuranceProduct
        policyStatus
        premiumAmount
        paymentMethod
        paymentFrequency
        currency
        numberFaultClaimsLast5Years
        yearsSinceLastFaultClaim
        cancellationDate
        cancelorLapseReason
 
      }
      party {    
        partyRole 
        firstName
        lastName
        bankAccountNumber   
      }
      building{
          streetNumber
          street
          mailboxNo
          city
          postalCode
          coverage {
          coverageType
          annualPremiumAmount
          deductibleAmount
        }
      }
      vehicle {
        make
        model
        vIN
       licensePlate
       horsePower
       kWPower
       vehicleUsage
        vehicleType
        usedVehicleInvoiceValue
        initialRegistrationDate
        oldtimer
        yearlyDistanceTravelled
        coverage {
            coverageType
          annualPremiumAmount
          deductibleAmount
        }
      }  
    }
    }
    `,
    };

    const headers = {
        "Content-Type": "application/json",
        "subscription-key": subscriptionKey,
        Authorization: `Bearer ${authorizationToken}`,
    };

    // try {
    //     fetch(graphqlEndpoint, {
    //         method: "POST",
    //         headers: headers,
    //         body: JSON.stringify(payload),
    //     })
    //         .then((response) => {
    //             return response.json();
    //         })
    //         .then((data) => {
    //         //   const response = data.data.graphQLForPolicyEvent
    //           return data
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // } catch (error) {
    //     console.error(error);
    // }
    try {
      const response = await fetch(graphqlEndpoint, {
        method: "POST",
        body: JSON.stringify(payload),
        headers:headers
      });

      if (!response.ok) {
        // Handle non-200 status codes (e.g., 404)
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }

  }
);

// Create a slice for managing the state
const apiSearchSlice = createSlice({
  name: "graphapi",
  initialState,
  reducers: {
    // setUser: (state, { payload }) => ({
    //   ...state,
    //   selectedUser: payload,
    // }),
    // setPolicyResonse:(state, { payload }) => ({
    //   ...state,
    //   policyResponse: payload,
      
    // }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGraphResults.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGraphResults.fulfilled, (state, action) => {
        state.loading = false;
        state.graphResponse = action.payload.data.graphQLForPolicyEvent;
        console.log(action.payload.data.graphQLForPolicyEvent, "graphResponse")
      })
      .addCase(fetchGraphResults.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        
      });
  },
});
export const { } = apiSearchSlice.actions;
export default apiSearchSlice.reducer;
