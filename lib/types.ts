export interface ItemProps {
  items: {
    title: string;
    url: string;
    icon?: React.ReactNode;
  }[];
}

export type ApiResponse = {
   status : "success" | "error";
   message : string
}
