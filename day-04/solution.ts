type Address = { address: string; city: string };

type PresentDeliveryList<Keys> = Record<keyof Keys, Address>;