<script setup>
import { defineProps } from 'vue'

defineProps(['headers', 'data'])
</script>

<template>
  <div class="table-main">
    <table>
      <thead>
        <tr>
          <th v-for="header in headers" :key="header.key">
            <slot :name="`header-${header.key}`" :headerProps="header">
              {{ header.name }}
            </slot>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in data" :key="row.id">
          <td v-for="header in headers" :key="header.key">
            <slot :name="`column-${header.key}`" :rowProps="row">
              {{ row[header.key] }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.table-main {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  background-color: #f9f9f9;

  width: fit-content;

  table {
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

      tr {
        &:last-child td {
          border-bottom: none;
        }

        td {
          padding: 0.4rem 0.5rem;
          border-bottom: 1px solid #ddd;
          color: $secondary-color-shade;
        }
      }
    }
  }
}
</style>
