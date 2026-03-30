export type RequestStatus = 'Sin revisar' | 'En revision' | 'Rechazada' | 'Aprobada';
export type RequestPriority = 'Sin asignar' | 'Baja' | 'Media' | 'Alta' | 'Urgente';

export type PeriodType = 'Horas' | 'Dias';

export interface Requests {
  id: number;
  employee_id: number;
  request_date: string;
  phone: string;
  category: string | null;
  reason: string | null;
  amount: number | null;
  period_type: PeriodType | null;
  requested_quantity: number | null;
  init_date: string | null;
  end_date: string | null;
  optional_hours: string | null;
  diagnosis: string | null;
  status: RequestStatus;
  priority: RequestPriority;
  other_explanation: string | null;
  attached_file: string | null;
  requester_document: string | null;
  requester_file_number: string | null;
  requester_name: string | null;
  requester_type: string | null;
}

export interface RequestResponse {
  success: boolean;
  count: number;
  data: Requests[];
}