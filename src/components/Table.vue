<script setup>
import { defineProps } from 'vue'

defineProps(['headers', 'data'])
</script>

<template>
  <table>
    <thead>
      <tr>
        <th v-for="header in headers" :key="header.id">
          <slot :name="`header-${header.id}`" :headerProps="header">
            {{ header.name }}
          </slot>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in data" :key="row.id">
        <td v-for="header in headers" :key="header.id">
          <slot :name="`column-${header.id}`" :rowProps="row">
            {{ row[header.id] }}
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
table {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  background-color: #f9f9f9;

  width: fit-content;
  border-collapse: collapse;

  thead {
    background-color: $secondary-color;
    color: $primary-color;

    th {
      padding: 0.4rem;
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
        border-bottom: 1px solid #ddd;
        color: $secondary-color-shade;
        padding: 0.4rem 0.5rem;
      }
    }
  }
}
</style>
