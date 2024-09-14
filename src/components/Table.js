import React from 'react';

export function Table({headers, data}){
    return (
        <table className="min-w-full bg-white shadow-md rounded">
          <thead>
            <tr>
                {headers.map((header, index) => (
                    <th key={index} className="text-black py-3 px-6 bg-gray-200 text-left text-xs font-medium uppercase tracking-wider">{header}</th>
                ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, rowIndex) => (
                <tr key={rowIndex} className="bg-gray-50">
                    {headers.map((header, colIndex) => (
                        <td key={colIndex} className="text-black py-4 px-6 border-b border-gray-200 text-sm">
                            {header.toLowerCase() === "image" ? (
                                <img src={item[header.toLowerCase().replace(" ", "_")]} alt="Product Image" classNameName="w-12 h-12" />
                            )
                        : (item[header.toLowerCase().replace(" ", "_")])    
                        }
                        </td>
                    ))}
                </tr>
            ))}
            
          </tbody>
        </table>
    )
}