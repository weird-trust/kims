export interface ContentProps {
  content: [
    {
      isActive?: boolean;
      id: number;
      title: string;
      titleNumber: number;
      copy: string;
      subcontent: [
        {
          description: string;
          timestamp: string;
        }
      ];
    }
  ];
}
