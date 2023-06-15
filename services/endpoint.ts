export const API = {
  requestOtp: '/auth/register/otp/request',
  submitOtp: '/auth/register/otp/submit',
  getCategory: '/category?level=1',
  registerFactory: '/factory/register',
  registerAgent: '/agent/register',
  masterProvice: '/master/provinces',
  masterDistrict: '/master/districts?province_id=',
  masterSubDistrict: '/master/subdistricts?district_id=',
  masterZipcode: '/master/sub_districts_id_by_zip_code?zip_code=',
}
