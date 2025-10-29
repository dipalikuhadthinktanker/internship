type Items = {
  id: number;
  is_deleted: boolean;
  web_invoice_timestamp_id: number;
  inventory_id: number;
  inventory_diamond_id?: number | null;
  web_invoice_item_lot_details_id?: number;
  melee_diamond_id?: number | null;
  stone_type: string;
  lot_number: string;
  open_carat: number;
  open_stone: number;
  return_carat?: number;
  return_stone?: number;
  convert_carat?: number;
  convert_stone?: number;
  description: string;
  stone_per_carat: number;
  total_amount: number;
  selected_item?: boolean;
  selected_inv_item?: boolean;
  updated_stone_per_carat?: number | null;
  add_item_status?: boolean;
  ret_reason?: string;
  ret_shipping?: boolean;
  ret_inv_ctrl?: boolean;
  ret_sales?: boolean;
  ret_acc?: boolean;
  ret_mgr?: boolean;
  invoice_sales?: boolean;
  invoice_mgr?: boolean;
  invoice_acc?: boolean;
  quickbook_txnline_id?: number | null;
  creditmemo_txnline_id?: number | null;
  created_at: string;
  updated_at: string;
  img_url: string;
};
type Records = {
  id: number;
  sales_person: string;
  client_number: string;
  date: string;
  company_ref: string;
  status: string;
  mi_type: string;
  record_type: string;
  company_name: string;
  ship_to_phone_no: string;
  created_at: string;
  updated_at: string;
  ship_to: string;
  client_info: number;
  terms: string;
  client_po: string;
  total_amount: number;
  balance_amount: number;
  timestamp: number;
  number: string;
  bill_to: string;
  current: number;
  "1-30 days": number;
  "31-60 days": number;
  "61-90 days": number;
  "Over 90 Days": number;
  client_email: string;
  client_attn: string;
  items: Items[];
  subtotal: number;
  shipping: number;
  discount: number;
  total: number;
};

type DueTotals = {
  current: number;
  "1-30 days": number;
  "31-60 days": number;
  "61-90 days": number;
  "Over 90 Days": number;
  total_amount: number;
  balance_amount: number;
};

type CompanyData = {
  records: Records[];
  due_totals: DueTotals;
};

type Tresp = {
  client_number: string;
  MRD: CompanyData;
  Lithos: CompanyData;
  Prijems: CompanyData;
};

const jsonData: Tresp[] = [
  {
    client_number: "RING",
    MRD: {
      records: [
        {
          id: 91,
          sales_person: "Ethan Davis",
          client_number: "RING",
          date: "2025-09-05",
          company_ref: "MRD",
          status: "Closed",
          mi_type: "Memo",
          record_type: "Order Memo",
          company_name: "RING",
          ship_to_phone_no: "+18009980000",
          created_at: "2025-09-05T10:30:12.000Z",
          updated_at: "2025-09-06T12:15:42.000Z",
          ship_to: "123 Diamond St, New York, NY, 10001, USA, Attn.John",
          client_info: 42,
          terms: "NET 30",
          client_po: "PO-5678",
          total_amount: 15000.0,
          balance_amount: 5000.0,
          timestamp: 200,
          number: "M-2001",
          bill_to: "123 Diamond St, New York, NY, 10001, USA",
          current: 5000.0,
          "1-30 days": 0,
          "31-60 days": 0,
          "61-90 days": 0,
          "Over 90 Days": 0,
          client_email: "john@ringcompany.com",
          client_attn: "John",
          items: [
            {
              id: 301,
              is_deleted: false,
              web_invoice_timestamp_id: 200,
              inventory_id: 501,
              lot_number: "MRD123",
              stone_type: "Single",
              open_carat: 2.5,
              open_stone: 1,
              description: "Fancy Yellow Diamond (GIA)",
              stone_per_carat: 6000.0,
              total_amount: 15000.0,
              created_at: "2025-09-05T10:32:10.000Z",
              updated_at: "2025-09-05T10:32:10.000Z",
              img_url: "",
            },
          ],
          subtotal: 15000.0,
          shipping: 0.0,
          discount: 0.0,
          total: 15000.0,
        },
      ],
      due_totals: {
        current: 5000.0,
        "1-30 days": 0,
        "31-60 days": 0,
        "61-90 days": 0,
        "Over 90 Days": 0,
        total_amount: 15000.0,
        balance_amount: 5000.0,
      },
    },
    Lithos: {
      records: [
        {
          id: 56,
          sales_person: "Olivia Mitchell",
          client_number: "RING",
          date: "2025-09-09",
          company_ref: "Lithos",
          status: "Open",
          mi_type: "Invoice",
          record_type: "Order Invoice",
          company_name: "RING",
          ship_to_phone_no: "+18009987878",
          created_at: "2025-09-09T14:08:23.500865Z",
          updated_at: "2025-09-09T14:08:49.515648Z",
          ship_to:
            "607 South Hill Street, \nLos Angeles, CA, 90014, USA, \nAttn.Lisa",
          client_info: 42,
          terms: "C.O.D",
          client_po: "",
          total_amount: 8400.0,
          balance_amount: 8400.0,
          timestamp: 163,
          number: "I-1002",
          bill_to: "607 South Hill Street, \nLos Angeles, CA, 90014, USA",
          current: 0,
          "1-30 days": 8400.0,
          "31-60 days": 0,
          "61-90 days": 0,
          "Over 90 Days": 0,
          client_email: "info@ringcompany.com",
          client_attn: "Lisa",
          items: [
            {
              id: 76,
              is_deleted: false,
              web_invoice_timestamp_id: 163,
              inventory_id: 78,
              inventory_diamond_id: null,
              web_invoice_item_lot_details_id: 84,
              melee_diamond_id: null,
              stone_type: "Single",
              lot_number: "LOZ1",
              open_carat: 1.08,
              open_stone: 1,
              return_carat: 0.0,
              return_stone: 0,
              convert_carat: 0.0,
              convert_stone: 0,
              description: "White/Brilliant /LOZ / (IGI-LG)",
              stone_per_carat: 7500.0,
              total_amount: 8100.0,
              selected_item: false,
              selected_inv_item: false,
              updated_stone_per_carat: null,
              add_item_status: false,
              ret_reason: "",
              ret_shipping: false,
              ret_inv_ctrl: false,
              ret_sales: false,
              ret_acc: false,
              ret_mgr: false,
              invoice_sales: false,
              invoice_mgr: false,
              invoice_acc: false,
              quickbook_txnline_id: null,
              creditmemo_txnline_id: null,
              created_at: "2025-09-09T14:08:28.449844Z",
              updated_at: "2025-09-09T14:08:28.449856Z",
              img_url: "",
            },
          ],
          subtotal: 8100.0,
          shipping: 100.0,
          discount: 200.0,
          total: 8000.0,
        },
        {
          id: 55,
          sales_person: "Olivia Mitchell",
          client_number: "RING",
          date: "2025-09-02",
          company_ref: "Lithos",
          status: "Open",
          mi_type: "Invoice",
          record_type: "Order Invoice",
          company_name: "RING",
          ship_to_phone_no: "+18009987878",
          created_at: "2025-09-02T14:26:08.693069Z",
          updated_at: "2025-09-09T14:02:07.667997Z",
          ship_to:
            "607 South Hill Street, \nLos Angeles, CA, 90014, USA, \nAttn.Lisa",
          client_info: 42,
          terms: "C.O.D",
          client_po: "",
          total_amount: 32760.0,
          balance_amount: 9720.0,
          timestamp: 162,
          number: "I-1001",
          bill_to: "607 South Hill Street, \nLos Angeles, CA, 90014, USA",
          current: 0,
          "1-30 days": 9720.0,
          "31-60 days": 0,
          "61-90 days": 0,
          "Over 90 Days": 0,
          client_email: "info@ringcompany.com",
          client_attn: "Lisa",
          items: [
            {
              id: 74,
              is_deleted: false,
              web_invoice_timestamp_id: 162,
              inventory_id: 119,
              inventory_diamond_id: null,
              web_invoice_item_lot_details_id: 82,
              melee_diamond_id: null,
              stone_type: "Single",
              lot_number: "RA2",
              open_carat: 1.08,
              open_stone: 1,
              return_carat: 0.0,
              return_stone: 0,
              convert_carat: 0.0,
              convert_stone: 0,
              description: "WH/DIAM-ROSE LAB RA D (IGI-LG)",
              stone_per_carat: 9000.0,
              total_amount: 9720.0,
              selected_item: false,
              selected_inv_item: false,
              updated_stone_per_carat: null,
              add_item_status: false,
              ret_reason: "WRONG_ITEM",
              ret_shipping: false,
              ret_inv_ctrl: false,
              ret_sales: false,
              ret_acc: false,
              ret_mgr: false,
              invoice_sales: false,
              invoice_mgr: false,
              invoice_acc: false,
              quickbook_txnline_id: null,
              creditmemo_txnline_id: null,
              created_at: "2025-09-02T14:26:19.652251Z",
              updated_at: "2025-09-02T14:26:19.652263Z",
              img_url: "",
            },
          ],
          subtotal: 9720.0,
          shipping: 0,
          discount: 0,
          total: 9720.0,
        },
      ],
      due_totals: {
        current: 0,
        "1-30 days": 18120.0,
        "31-60 days": 0,
        "61-90 days": 0,
        "Over 90 Days": 0,
        total_amount: 41160.0,
        balance_amount: 18120.0,
      },
    },
    Prijems: {
      records: [
        {
          id: 77,
          sales_person: "Sophia Carter",
          client_number: "RING",
          date: "2025-09-07",
          company_ref: "Prijems",
          status: "Open",
          mi_type: "Invoice",
          record_type: "Order Invoice",
          company_name: "RING",
          ship_to_phone_no: "+18009981111",
          created_at: "2025-09-07T11:45:22.000Z",
          updated_at: "2025-09-07T11:50:33.000Z",
          ship_to: "456 Jewelry Ave, Chicago, IL, 60601, USA, Attn.Alex",
          client_info: 42,
          terms: "C.O.D",
          client_po: "",
          total_amount: 6400.0,
          balance_amount: 6400.0,
          timestamp: 201,
          number: "P-3001",
          bill_to: "456 Jewelry Ave, Chicago, IL, 60601, USA",
          current: 0,
          "1-30 days": 6400.0,
          "31-60 days": 0,
          "61-90 days": 0,
          "Over 90 Days": 0,
          client_email: "alex@ringcompany.com",
          client_attn: "Alex",
          items: [
            {
              id: 302,
              is_deleted: false,
              web_invoice_timestamp_id: 201,
              inventory_id: 502,
              lot_number: "PRJ45",
              stone_type: "Single",
              open_carat: 1.2,
              open_stone: 1,
              description: "Lab Grown Diamond Round (IGI-LG)",
              stone_per_carat: 5300.0,
              total_amount: 6360.0,
              created_at: "2025-09-07T11:47:00.000Z",
              updated_at: "2025-09-07T11:47:00.000Z",
              img_url: "",
            },
          ],
          subtotal: 6360.0,
          shipping: 40.0,
          discount: 0.0,
          total: 6400.0,
        },
      ],
      due_totals: {
        current: 0,
        "1-30 days": 6400.0,
        "31-60 days": 0,
        "61-90 days": 0,
        "Over 90 Days": 0,
        total_amount: 6400.0,
        balance_amount: 6400.0,
      },
    },
  },
];
//print json data
const result = JSON.stringify(jsonData, null, 2);
console.log(result);
