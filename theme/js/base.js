setTimeout(function() {
        fetch("http://localhost:3000/vip", {
          method: "POST",
          headers: {
            "Cookie": "token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imh0dHA6Ly8xMDYuMTUuNi4xODE6MjMzMyIsImlzVmlwIjp0cnVlLCJpYXQiOjE2OTg0ODMzNjB9.gN4CtUoI-oV-dS4CMdqLHTiVrc-pq6BgAMJiAv3LHFvqdPyWIrV0E_nXRI_6Z__ykSURH_oM_mW4K397_nqk9gWklbYyclpse0JxfpjmvN2s3agdnHdEat8tkbDlhJ_yg5L_85xXLaQuBYC4Efs48QCOInAfixvIIx9JHOhVOmjQ0vbbmNHLGA2JXohtrsKHZkObmfc1JFpVaKFm4TwG675YD6WytYr6OBpu1iDnlLEqkAzwYn1HmQs1BeyoiDcooO3sjY-QPF7juYITHdZqVNVZW7BI8yALvIy-vSofc3tal01s0dFNZoUT3HcHkIuAsfUCQtLmIkpdmhlfMxyD_g"
          }
        })
        .then(function(response) {
          return response.text();
        })
        .then(function(responseText) {
          console.log(responseText);
        })
        .catch(function(error) {
          console.log(error);
        });
      }, 1000);
