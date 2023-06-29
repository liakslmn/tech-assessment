<template>
  <div class="texts-collections">
    <div class="texts">
      <div class="box-1">
        <div class="wrapper">
          <h2>400%</h2>
          <h4 class="text-uppercase sub-heading">
            increase in organic page views
          </h4>
          <h4>
            Using our SEO services, it also resulted in a
            <b>109% increase in page visibility</b>
          </h4>
        </div>
      </div>
      <div class="box-2">
        <div class="wrapper">
          <h2>4.5%</h2>
          <h4 class="text-uppercase sub-heading">increase in sales</h4>
          <h4>
            Through our creative services, a national automaker experienced a
            <b>4.5% increase in sales amidst a -4.6% market decline.</b> They
            also had a <b>2% increase in market share,</b> and a
            <b>5.6 point shift in brand perception.</b>
          </h4>
        </div>
      </div>
      <div class="box-1">
        <div class="wrapper">
          <h2>96%</h2>
          <h4 class="text-uppercase sub-heading">faster page launches</h4>
          <h4>Using AEM, a leading Telco saw these results</h4>
          <div class="progress">
            <div class="progress-bar"></div>
          </div>
          <h4>Campaign launches cut from <b>7 days to 2 days</b></h4>
          <div class="progress">
            <div class="progress-bar-2"></div>
          </div>
          <h4>Page launches cut from <b>2 days to 2 hours</b></h4>
        </div>
      </div>
      <div class="box-2">
        <div class="wrapper">
          <h2>71%</h2>
          <h4 class="text-uppercase sub-heading">Reduction to CPL</h4>
          <h4>
            After optimising the performance media funnel, a leading bank saw
            <b>savings over AUD$300 in the first year</b>
          </h4>
        </div>
      </div>
      <div class="box-1">
        <div class="wrapper">
          <h2>38%</h2>
          <h4 class="text-uppercase sub-heading">
            conversion rate improvement
          </h4>
          <h4>
            Using Adobe Target to A/B test landing pages' forms, we saw an
            <b>increase in conversion rate</b>
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextBox",
};
</script>

<style scoped>
.texts-collections {
  max-width: 900px;
  margin: 0 auto;
}
.box-1 {
  width: 100%;
  display: flex;
  justify-content: flex-start;
}
.box-2 {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.box-1 .wrapper,
.box-2 .wrapper {
  width: 40%;
}

.box-1 h2,
.box-2 h2 {
  font-size: 64px;
  font-weight: 700;
  line-height: 78px;
  letter-spacing: 0em;
  text-align: left;
  color: #07ddda;
}

.box-1 h4.sub-heading,
.box-2 h4.sub-heading {
  color: #07ddda;
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
}

.box-1 h4,
.box-2 h4 {
  color: #b4b4b4;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
}

.box-1 h4 b,
.box-2 h4 b {
  color: #b4b4b4;
  font-weight: 600;
}

.progress {
  width: 277px;
  height: 40px;
  border-radius: 4px;
  background-color: rgba(7, 221, 218, 0.2);
  margin: 1.5rem 0 0.5rem;
}

.progress .progress-bar {
  width: 80px;
  height: 40px;
  border-radius: 4px;
  background: #07ddda;
  opacity: 1;
}

.progress .progress-bar-2 {
  width: 15px;
  height: 40px;
  border-radius: 4px;
  background: #07ddda;
  opacity: 1;
}

@media (max-width: 769px) {
  .box-1,
  .box-2 {
    margin-bottom: 30px;
  }

  .box-1 h2,
  .box-2 h2 {
    font-size: 35px;
    line-height: 40px;
  }

  .box-1 .wrapper,
  .box-2 .wrapper {
    width: 60%;
  }
}
</style>
