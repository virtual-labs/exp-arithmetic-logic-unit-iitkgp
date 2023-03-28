## Procedure
 
 Please follow these steps to do the experiment.
 
 #### Part 1:
                         
1. first apply high voltage to V<sub>cc</sub>.Then apply high voltage to M(mode control input) and low voltage to all the 4 select inputs.Logical operation will be performed.The output will be inverted A.

<img src="images/alu1.png" width="50%"/>
                    
2. Next, apply high voltage to S0 and apply low voltage to all other select inputs.The output will be 
<span style="text-decoration:overline;">A + B</span>. 

<img src="images/alu2.png" width="50%"/>
                              
3. Now apply high voltage to S1 and low voltage to all other select inputs.The output will be <span style="text-decoration:overline;">A</span>B.

<img src="images/alu3.png" width="50%"/>

4. Next, apply high voltage to S0 and S1 and low voltage to other select inputs.The output will be logical 1 <br/>
    
<img src="images/alu4.png" width="50%"/>

5.  Apply high voltage to S2 and apply low voltage to all other select inputs.The output will be <span style="text-decoration:overline;">AB</span>.  

6.  Apply all the combinations to all the select inputs and check the logical output.  
<img src="images/alu5.png" width="50%"/>
                               
7. Apply low voltage to mode control input and high voltage to C<sub>in</sub>.Now the operation mode will be arithmetic mode. 

8. Next apply low voltages to all the select inputs.The output will be A + 1. <br/>
    
<img src="images/alu6.png" width="50%"/>

9. Next, apply high voltage to S0 and low voltage to all other select inputs.The output will be A + B + 1.<br/>
   
            
<img src="images/alu7.png" width="50%"/>

10.  Apply high voltage to S1 and apply low voltages to all other select inputs.The output will be A + <span style="text-decoration:overline;">B</span>.

<img src="images/alu8.png" width="50%"/>

11. Now apply high voltage to S0 and S1 and low volage to all other select inputs.The output will be -1 + 1.It means outputput will be zero.

<img src="images/alu9.png" width="50%"/>

12.  Next, apply high voltage to S2 and low voltage to all other select inputs.The output will be A plus A<span style="text-decoration:overline;">B</span>. 

<img src="images/alu10.png" width="50%"/>
                                