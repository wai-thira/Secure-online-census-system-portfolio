
function toggleSpouseFields() {
    const maritalStatus = document.getElementById('marital_status').value;
    const spouseFields = document.getElementById('spouseFields');
    const spouseName = document.getElementById('spouse_name');
    const spouseId = document.getElementById('spouse_id');
    const spouseDob = document.getElementById('spouse_date_of_birth');
    const spouseGender = document.getElementById('spouse_gender');
    
    if (maritalStatus === 'Married') {
        spouseFields.style.display = 'block';
        spouseName.required = true;
        spouseId.required = true;
        spouseDob.required = true;
        spouseGender.required = true;
    } else {
        spouseFields.style.display = 'none';
        spouseName.required = false;
        spouseId.required = false;
        spouseDob.required = false;
        spouseGender.required = false;
        
        spouseName.value = '';
        spouseId.value = '';
        spouseDob.value = '';
        spouseGender.value = '';
        document.getElementById('spouse_education_level').value = '';
        document.getElementById('spouse_occupation').value = '';
        document.getElementById('spouse_monthly_income').value = '';
    }
}
