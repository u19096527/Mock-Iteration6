export class Equips {
  $id: string = '';
  $values: Equi[] = [];
}

export class Equi {
  equipment_ID: number = 0;
  name: string = "";
  description: string = "";
  quantity_On_Hand: number = 0;
  image: string = "";
  module_ID: number = 0;
  price: number =0;
  equipmentType_ID: number = 0;
}