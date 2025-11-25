export const ACTIVE_DRAG_ITEM_TYPE = {
  COLUMN: "ACTIVE_DRAG_ITEM_TYPE_COLUMN",
  CARD: "ACTIVE_DRAG_ITEM_TYPE_CARD",
};
export const generatePlaceholderCard = (column) => {
  return {
    boardId: column?.boardIds,
    columnId: column?._id,
    FE_placeholder_card: true,
    _id: `${column?._id}-placeholder-card`,
  };
};
export const apiBackend = import.meta.env.VITE_API_URL;
export const apiVersion = "v1";

// Dữ liệu cho các mục văn bản bên trái ở homePage
export const features = [
  {
    title: "Hộp thư đến",
    description:
      "Mọi điều bạn quan tâm đều được đưa tới hộp thư đến. Ghi lại việc cần làm từ mọi nơi tại bất kỳ thời điểm nào.",
    image:
      "https://images.ctfassets.net/rz1oowkt5gyp/7lpUSxVqNRggpqzCNcnfo1/04cf35d0a0ef60e18c6575eb9a0374e4/inbox-slider.png?w=2184&fm=webp",
    id: 1,
  },
  {
    title: "Các bảng",
    description:
      "Danh sách việc cần làm của bạn có thể dài nhưng hoàn toàn có thể sắp xếp! Theo dõi mọi thứ từ “việc cần giải quyết” đến “nhiệm vụ đã hoàn thành”.",
    image:
      "https://images.ctfassets.net/rz1oowkt5gyp/w3lwhF5VUl2zPrQhoo6zi/87076ead73cad0973c907db1960bacfc/board-slider.png?w=2184&fm=webp",
    id: 2,
  },
  {
    title: "Công cụ lập kế hoạch",
    description:
      "Kéo, thả, hoàn thành công việc. Đưa các nhiệm vụ hàng đầu của bạn vào lịch rồi dành thời gian cho những điều thực sự quan trọng.",
    image:
      "https://images.ctfassets.net/rz1oowkt5gyp/2CRH0gvg9NCw6tdLBHIBQy/eee39403406317dc1fc841bf3f685245/planner-slider.png?w=2184&fm=webp",
    id: 3,
  },
];
// mock data
export const templates = [
  {
    title: "Kanban Template",
    bg: "linear-gradient(135deg, #0079bf 0%, #5067c5 100%)", // Gradient xanh
    tag: "TEMPLATE",
  },
  {
    title: "Daily Task Management Template | Trello",
    bg: 'url("https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80")',
    tag: "TEMPLATE",
  },
  {
    title: "Remote Team Hub",
    bg: 'url("https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80")',
    tag: "TEMPLATE",
  },
];
// mock data
export const recentBoards = [
  { title: "VanDaoExplore", bg: "linear-gradient(to right, #2193b0, #6dd5ed)" },
  { title: "Dating Funnel Template", bg: "#f2d600" }, // Vàng
  {
    title: "vcIII",
    bg: 'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80")',
  },
  {
    title: "dm",
    bg: 'url("https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80")',
  },
];
