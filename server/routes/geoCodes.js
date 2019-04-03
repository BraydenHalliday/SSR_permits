const express = require("express");
const router = express.Router();
const request = require("request-promise");

/* GET users listing. */
router.get("/:community", function(req, res, next) {
  const communityName = req.params.community;
  let options = {
    url: `https://data.calgary.ca/resource/kxmf-bzkv.json?name=${communityName.toUpperCase()}`,
    headers: {
      "User-Agent": "request",
      "X-App-Token": "TuumEdQ9KIehmtGnn2QjJoes7"
    }
  };
  request(options).then(data => {
    data = JSON.parse(data)[0];
    let geoCodes = data.the_geom.coordinates[0][0].map(coordinates => {
      return { lat: coordinates[1], lng: coordinates[0] };
    });
    const dataObj = {
      communityId: data._feature_id,
      communityCode: data.comm_code,
      geoCodes: geoCodes
    }
    res.status(200).json(dataObj);
  });
});

module.exports = router;