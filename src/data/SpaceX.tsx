import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import { Launch } from "./Launch";
import Card from "../components/Card/Card";
import CardImage from "../components/Card/CardImage";
import CardBody from "../components/Card/CardBody";
import CardTitle from "../components/Card/CardTitle";
import CardContent from "../components/Card/CardContent";

export const LAUNCH_SITES = ["CCAFS SLC 40", "VAFB SLC 4E", "KSC LC 39A"];

type Props = {
  site:string
}


export default function SpaceX (site: Props){
  var GET_LAUNCHES = gql`
  {
    launchesPast(limit: 10, find: {site_name: "${site.site}"}) {
      mission_name
      links {
        flickr_images
      }
      launch_date_local
      rocket {
        rocket_name
      }
    }
  }
  
  `;
  const { errors, loading, data } = useQuery(GET_LAUNCHES);

  if (loading) return <p className="body--small">Loading...</p>;

  if (errors) return <p className="body--small">Error: {errors}</p>;

  return data.launchesPast.map(
    ({ mission_name, links, launch_date_local, rocket }: Launch) => (
      <Card>
        <CardImage
          src={
            links.flickr_images.length > 0 ? links.flickr_images[0] : undefined
          }
        />
        <CardBody>
          <CardTitle>{mission_name}</CardTitle>
          <CardContent>{rocket.rocket_name}</CardContent>
          <CardContent>{new Date(launch_date_local).toLocaleDateString('en-US',{ year: 'numeric', month: 'long', day: 'numeric' })}</CardContent>
        </CardBody>
      </Card>
    )
  );
};
