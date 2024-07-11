import React from "react";
import { Row, Col } from "antd";
import CardContainerMedium from "../cardContainer/cardContainerMedium";
import CardContainerSmall from "../cardContainer/cardContainerSmall";
import CardContainerLarge from "../cardContainer/cardContainerLarge";
import CardContainerTeam from "../cardContainer/cardContainerTeams";
import ObjectiveComponent from "../cardContainer/objectiveCard";
import SalesForecastChart from "../cardContainer/chartContainer";
import {
  cardMediumList,
  cardSmallList,
  cardLargeList,
  teamsList,
} from "@/constants/dashboard/dashboardConstants";

const ContentComponent = () => {
  return (
    <div className="outer-container">
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
        }}
      >
        <Col lg={10} xs={24} md={10}>
          <Row
            gutter={{
              xs: 8,
              sm: 16,
              md: 24,
            }}
          >
            {cardMediumList.map((detail) => {
              return (
                <CardContainerMedium
                  number={detail.number}
                  heading={detail.heading}
                  icon={detail.icon}
                />
              );
            })}
          </Row>
        </Col>

        <Col
          className="gutter-row"
          md={7}
          xs={24}
        >
          <div className="small-container">
            <CardContainerLarge
              for="revenues"
              title="Revenues"
              head="Today's Deposit"
              amount="₹ 288000"
              subtitle="Amount"
              itemList={cardLargeList}
            />
          </div>
        </Col>
        <Col
          className="gutter-row"
          md={7}
          xs={24}
        >
          <div className="small-container">
            <CardContainerLarge
              for="transactions"
              title="Transactions"
              head="80"
              amount="for today"
              subtitle=""
              itemList={cardLargeList}
            />{" "}
          </div>
        </Col>
      </Row>

      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
        }}
      >
        <Col
          className="gutter-row"
          md={16}
          xs={24}
        >
          <div className="small-container">
            <SalesForecastChart />
          </div>
        </Col>
        <Col lg={8} xs={24} md={8}>
          <Row
            gutter={{
              xs: 8,
              sm: 16,
              md: 24,
            }}
          >
            {cardSmallList.map((detail) => {
              return (
                <CardContainerSmall
                  number={detail.number}
                  heading={detail.heading}
                  icon={detail.icon}
                />
              );
            })}
          </Row>
        </Col>
      </Row>

      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
        }}
      >
        <Col className="gutter-row small-container" md={8} xs={24}>
          <CardContainerLarge
            for="agents"
            title="Agents"
            head="Include All Teams"
            amount="88"
            subtitle="Leads"
            itemList={cardLargeList}
          />{" "}
        </Col>
        <Col xs={24} md={8}>
          <div className=" small-container">
            <CardContainerTeam teamsList={teamsList} />
          </div>
        </Col>
        <Col xs={24} md={8}>
          <div className="small-container">
            <ObjectiveComponent />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ContentComponent;
