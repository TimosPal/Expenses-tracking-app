<script setup></script>

<template>
  <Page title="Expenses" subtitle="Where expenses are added">
    <div class="table-main">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Money</th>
            <th>Paying method</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1/1/2024</td>
            <td>
              <select name="" id="">
                <option value="Food">Food</option>
                <option value="Drink">Drink</option>
                <option value="Transport">Transport</option>
              </select>
            </td>
            <td>$2.00</td>
            <td>Cash</td>
            <td>Edit | Delete</td>
          </tr>
          <tr>
            <td>5/10/2024</td>
            <td>
              <select name="" id="">
                <option value="Food">Food</option>
                <option value="Drink">Drink</option>
                <option value="Transport">Transport</option>
              </select>
            </td>
            <td>$5.00</td>
            <td>Card</td>
            <td>Edit | Delete</td>
          </tr>
          <tr>
            <td>13/12/2024</td>
            <td>
              <select name="" id="">
                <option value="Food">Food</option>
                <option value="Drink">Drink</option>
                <option value="Transport">Transport</option>
              </select>
            </td>
            <td>$12.00</td>
            <td>Card</td>
            <td>Edit | Delete</td>
          </tr>
        </tbody>
      </table>
    </div>
  </Page>
</template>

<style lang="scss" scoped>
.table-main {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  background-color: #f9f9f9;

  table {
    width: 100%;
    border-collapse: collapse;

    thead {
      background-color: $secondary-color;
      color: $primary-color;

      th {
        padding: 1rem;
        text-align: left;
        font-weight: bold;
        font-size: 1rem;
      }
    }

    tbody {
      tr:nth-child(even) {
        background-color: #f2f2f2;
      }

      tr:nth-child(odd) {
        background-color: #ffffff;
      }

      td {
        padding: 0.8rem 1rem;
        border-bottom: 1px solid #ddd;
        font-size: 1rem;
        color: $secondary-color-shade;
      }

      tr:last-child td {
        border-bottom: none;
      }
    }
  }
}
</style>
