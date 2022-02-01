export type Launch = {
  mission_name: string;
  links: links;
  launch_date_local: string;
  rocket: rocket;
};

type links = {
  flickr_images: string;
};

type rocket = {
  rocket_name: string;
};
